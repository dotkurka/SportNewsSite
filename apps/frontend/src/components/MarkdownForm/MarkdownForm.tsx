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
    <div className={className} style={{ width: '100%' }}>
      <div data-color-mode='light'>
        {label && <span className='markdown-form-label'>{label}</span>}
        <MDEditor
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
          extraCommands={[]}
          height={380}
          id='MDarea'
          onChange={(val) => setFieldValue(textareaProps.name, val)}
          prefixCls='markdown-form'
          preview='edit'
          style={{ borderColor: isValid }}
          textareaProps={textareaProps}
          value={value}
        />
      </div>
    </div>
  );
};

export default MarkdownForm;
