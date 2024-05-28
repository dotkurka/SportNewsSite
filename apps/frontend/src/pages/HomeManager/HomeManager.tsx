import { useContext, useRef, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import {
  useGetHomeFormInitialQuery,
  useGetHomePreviewMutation,
  useUpdateHomeMutation,
} from 'api/homeApi';
import { ErrorModal, HomeComponent, PreviewButton } from 'components';
import ArticleSubmitContext from 'features/article/articleSubmitContext';
import { homeInitialValue } from 'features/home/homeInitialValue';
import HomeManagerForm from 'pages/HomeManager/HomeManagerForm';

import type {
  HomeFormValueType,
  HomeRequestType,
  HomeResponseType,
  IHomeFormItem,
} from 'features/home/types';

import './HomeManager.scss';

const HomeManager = () => {
  const [submitAction, setSubmitAction] = useState<'preview' | 'submit'>();
  const [preview, setPreview] = useState<HomeResponseType | null>(null);

  const submitRef = useContext(ArticleSubmitContext);
  const previewRef = useRef<HTMLButtonElement>(null);

  const { data: homeFieldValue } = useGetHomeFormInitialQuery();
  const [updateHome, { isError: isUpdateError, error: updateError }] = useUpdateHomeMutation();
  const [getHomePreview, { isLoading, isError: isPreviewError, error: previewError }] =
    useGetHomePreviewMutation();

  const handleShowPreview = () => {
    if (preview) {
      setPreview(null);
    } else {
      previewRef?.current?.click();
    }
  };

  const mapField = (article: IHomeFormItem) => ({
    category: article.category.id,
    conference: article.conference.id,
    team: article.team.id,
    storedFrom: article.storedFrom.value,
  });

  const handleSubmitFrom = async (values: HomeFormValueType) => {
    const mainData: HomeRequestType = {
      mainArticle: mapField(values.mainArticle),
      subArticle: mapField(values.subArticle),
      mostPopular: mapField(values.mostPopular),
      mostComments: mapField(values.mostComments),
      breakdown: {
        first: mapField(values.breakdown.first),
        second: mapField(values.breakdown.second),
      },
      potd: values.potd,
    };

    if (submitAction === 'submit') {
      await updateHome(mainData);
    } else if (submitAction === 'preview') {
      const previewData = await getHomePreview(mainData).unwrap();

      if (previewData) setPreview(previewData);
    }
  };

  const showPreview = Boolean(preview) && !isLoading;
  const showForm = Boolean(preview) || isLoading;

  return (
    <div className='home-manager'>
      {isLoading && (
        <div className='home-manager-loading'>
          <TailSpin color='#D72130' height='150' width='150' />
        </div>
      )}
      <PreviewButton className='home-manager-preview-btn' onClick={handleShowPreview} type='submit'>
        {preview ? 'Back' : 'Preview'}
      </PreviewButton>
      {showPreview && preview && <HomeComponent className='home-manager-preview' data={preview} />}
      <HomeManagerForm
        hidden={showForm}
        initialValues={homeFieldValue || homeInitialValue}
        onSubmit={handleSubmitFrom}
        previewRef={previewRef}
        submitAction={setSubmitAction}
        submitRef={submitRef}
      />
      <ErrorModal error={previewError || updateError} isError={isPreviewError || isUpdateError} />
    </div>
  );
};

export default HomeManager;
