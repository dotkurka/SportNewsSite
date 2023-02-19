interface ISurveyValue {
  answer: string;
  value: number;
  procent?: number;
}

export interface ISurveyForm {
  inputValues: ISurveyValue[];
  showResult?: () => void;
}

export interface ISurvey {
  theme: string;
  question: string;
  values: ISurveyValue[];
}
