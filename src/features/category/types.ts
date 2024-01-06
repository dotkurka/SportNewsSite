export interface ICaregoryData extends ITeamData {
  conference?: IConferenceData[];
}

export interface IConferenceData extends ITeamData {
  team: ITeamData[];
}

export interface ITeamData {
  id: string;
  title: string;
  path: string;
}

export interface ICategoryQueryParams {
  category: string;
  select: string;
}
