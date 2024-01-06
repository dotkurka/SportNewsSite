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

  const showPreview = !!preview && !isLoading;
  const showForm = !!preview || isLoading;

  return (
    <div className='home-manager'>
      {isLoading && (
        <div className='home-manager-loading'>
          <TailSpin width='150' height='150' color='#D72130' />
        </div>
      )}
      <PreviewButton onClick={handleShowPreview} type='submit' className='home-manager-preview-btn'>
        {preview ? 'Back' : 'Preview'}
      </PreviewButton>
      {showPreview && <HomeComponent className='home-manager-preview' data={preview} />}
      <HomeManagerForm
        initialValues={homeFieldValue || homeInitialValue}
        onSubmit={handleSubmitFrom}
        hidden={showForm}
        submitAction={setSubmitAction}
        submitRef={submitRef}
        previewRef={previewRef}
      />
      <ErrorModal isError={isPreviewError || isUpdateError} error={previewError || updateError} />
    </div>
  );
};

export default HomeManager;
