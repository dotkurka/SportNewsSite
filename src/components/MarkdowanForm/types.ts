export interface IMarkdownForm {
  value: string;
  name: string;
  onChange: (e: string | React.ChangeEvent<HTMLTextAreaElement>) => void;
}
