import { getIn } from 'formik';
import { useState } from 'react';

import { Select } from 'components';
import { sidebarData } from 'config/SideBarData/SidebarData';
import { sortOptions } from 'features/article/constants';

import type { ICaregoryData, IConferenceData, ITeamData } from 'features/category/types';
import type { IHomeManagerSelectGroup } from 'pages/HomeManager/types';

// replace mock data
// const { data: categoryData } = useGetCategoriesQuery({});
const category = sidebarData.filter((item) => item.conference);

const HomeManagerSelectGroup = ({
  values,
  setFieldValue,
  className,
  errors,
  touched,
  name,
}: IHomeManagerSelectGroup) => {
  const [conference, setConference] = useState<IConferenceData[] | undefined>(
    values.category?.conference,
  );
  const [team, setTeam] = useState<ITeamData[]>(values.conference?.team);
  const [clearConferenceValue, setClearConferenceValue] = useState('');
  const [clearTeamValue, setClearTeamValue] = useState('');

  const handleSetConference = (item: ICaregoryData) => {
    setClearConferenceValue(item.title);
    setClearTeamValue(item.title);
    setConference(item.conference);
  };

  const handleSetTeam = (item: IConferenceData) => {
    setClearTeamValue(item.title);
    setTeam(item.team);
  };

  return (
    <>
      <Select
        className={className}
        defaultValue={values.category.title}
        errors={errors?.category?.title}
        formikSetValue={setFieldValue}
        label='category'
        name={`${name}.category`}
        onChange={handleSetConference}
        options={{ primaryKey: 'title', options: category }}
        placeholder='Not Selected'
        succesDisabled
        touched={touched?.category?.title}
      />
      <Select
        className={className}
        clearValue={clearConferenceValue}
        defaultValue={values.conference?.title}
        errors={getIn(errors, `conference`)}
        formikSetValue={setFieldValue}
        label='conference'
        name={`${name}.conference`}
        onChange={handleSetTeam}
        options={{ primaryKey: 'title', options: conference }}
        placeholder='Not Selected'
        succesDisabled
        touched={getIn(touched, `conference`)}
      />
      <Select
        className={className}
        clearValue={clearTeamValue}
        defaultValue={values.team?.title}
        errors={getIn(errors, `team`)}
        formikSetValue={setFieldValue}
        label='team'
        name={`${name}.team`}
        options={{ primaryKey: 'title', options: team }}
        placeholder='Not Selected'
        succesDisabled
        touched={getIn(touched, `team`)}
      />
      <Select
        className={className}
        defaultValue={values.storedFrom.title}
        errors={errors?.storedFrom?.title}
        formikSetValue={setFieldValue}
        label='stored from'
        name={`${name}.storedFrom`}
        options={{ primaryKey: 'title', options: sortOptions }}
        placeholder='Not Selected'
        succesDisabled
        touched={touched?.storedFrom?.title}
      />
    </>
  );
};

export default HomeManagerSelectGroup;
