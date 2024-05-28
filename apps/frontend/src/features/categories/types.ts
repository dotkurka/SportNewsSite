export interface ICaregoryData extends ITeamData {
  conferences?: IConferenceData[];
}

export interface IConferenceData extends ITeamData {
  teams: ITeamData[];
}

export interface ITeamData {
  id: string;
  title: string;
  path: string;
}

export interface ICategoryQueryParams {
  filter: string;
  sort: string;
}

export interface IConferenceParams {
  category?: string;
  filter?: string;
  sort?: string;
}

export type TeamParamsType = IConferenceParams;
