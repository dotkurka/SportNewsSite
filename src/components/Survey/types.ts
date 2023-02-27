interface ISurveyValue {
  answer: string;
  value: number;
  interest?: number;
}

export interface ISurveyForm {
  inputValues: ISurveyValue[];
  showResult?: () => void;
}

export interface ISurvey {
  theme: string;
  question: string;
  date: {
    start: string;
    end: string;
  };
  values: ISurveyValue[];
}
