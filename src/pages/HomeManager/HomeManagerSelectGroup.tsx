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
        succesDisabled
        errors={errors?.category?.title}
        touched={touched?.category?.title}
        defaultValue={values.category.title}
        formikSetValue={setFieldValue}
        onChange={handleSetConference}
        placeholder='Not Selected'
        className={className}
        label='category'
        name={`${name}.category`}
        options={{ primaryKey: 'title', options: category }}
      />
      <Select
        succesDisabled
        touched={getIn(touched, `conference`)}
        errors={getIn(errors, `conference`)}
        clearValue={clearConferenceValue}
        defaultValue={values.conference?.title}
        formikSetValue={setFieldValue}
        onChange={handleSetTeam}
        placeholder='Not Selected'
        className={className}
        label='conference'
        name={`${name}.conference`}
        options={{ primaryKey: 'title', options: conference }}
      />
      <Select
        succesDisabled
        touched={getIn(touched, `team`)}
        errors={getIn(errors, `team`)}
        clearValue={clearTeamValue}
        defaultValue={values.team?.title}
        formikSetValue={setFieldValue}
        placeholder='Not Selected'
        className={className}
        label='team'
        name={`${name}.team`}
        options={{ primaryKey: 'title', options: team }}
      />
      <Select
        succesDisabled
        errors={errors?.storedFrom?.title}
        touched={touched?.storedFrom?.title}
        defaultValue={values.storedFrom.title}
        formikSetValue={setFieldValue}
        placeholder='Not Selected'
        className={className}
        label='stored from'
        name={`${name}.storedFrom`}
        options={{ primaryKey: 'title', options: sortOptions }}
      />
    </>
  );
};

export default HomeManagerSelectGroup;
