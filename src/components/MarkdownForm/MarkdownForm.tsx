import MDEditor, { commands } from '@uiw/react-md-editor';
import { useFormikContext } from 'formik';

import toolBarComands from 'components/MarkdownForm/toolbarComands';

import type { IMarkdownForm } from 'components/MarkdownForm/types';

import './MarkdownForm.scss';

const MarkdownForm = ({
  value,
  className,
  touched,
  errors,
  label,
  ...textareaProps
}: IMarkdownForm) => {
  const { setFieldValue } = useFormikContext();

  const errorValid = errors ? '#e1464e' : '';
  const isValid = touched ? errorValid : '';

  return (
    <div style={{ width: '100%' }} className={className}>
      <div data-color-mode='light'>
        {label && <span className='markdown-form-label'>{label}</span>}
        <MDEditor
          height={380}
          textareaProps={textareaProps}
          id='MDarea'
          style={{ borderColor: isValid }}
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
