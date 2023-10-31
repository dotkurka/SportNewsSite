import MDEditor, { commands } from '@uiw/react-md-editor';
import { useFormikContext } from 'formik';

import toolBarComands from 'components/MarkdownForm/toolbarComands';

import type { IMarkdownForm } from 'components/MarkdownForm/types';

import './MarkdownForm.scss';

const MarkdownForm = ({ value, className, ...textareaProps }: IMarkdownForm) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div style={{ width: '600px' }} className={className}>
      <div data-color-mode='light'>
        <MDEditor
          textareaProps={textareaProps}
          id='MDarea'
          prefixCls='markdown-form'
          value={value}
          onChange={(val) => setFieldValue(textareaProps.name, val)}
          commands={[
            toolBarComands.title1,
            toolBarComands.title2,
            commands.divider,
            toolBarComands.bold,
            toolBarComands.italic,
            toolBarComands.underline,
            commands.divider,
            toolBarComands.uList,
            toolBarComands.oList,
            commands.divider,
            toolBarComands.link,
          ]}
          preview='edit'
          extraCommands={[]}
        />
      </div>
    </div>
  );
};

export default MarkdownForm;
