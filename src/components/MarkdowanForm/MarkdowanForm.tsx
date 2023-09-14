import MDEditor, { commands } from '@uiw/react-md-editor';
import { useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';

import { useFileUploadMutation } from 'api/fileUploadApi';
import { bold, italic, title1, title2, underline } from 'components/MarkdowanForm/toolbarComands';

import type { ICommand } from '@uiw/react-md-editor';
import type { IMarkdownForm } from 'components/MarkdowanForm/types';
import type { IRequestError } from 'features/auth/types';
import type { IFileRequest, IFileResponse } from 'features/fileUpload/types';

import './MarkdowanForm.scss';

const MarkdownForm = ({ value, onChange, ...textareaProps }: IMarkdownForm) => {
  const [imageData, setImageData] = useState<IFileResponse>();
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadFile, { error: uploadError, isError }] = useFileUploadMutation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFieldValue } = useFormikContext();

  const handlerChange = async (event: React.ChangeEvent) => {
    setImageData(undefined);
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const imageHref = await uploadFile(formData as unknown as IFileRequest);

      if ('data' in imageHref) {
        setImageData(imageHref.data);
      }
    }
  };

  const insertValueInTextArea = () => {
    if (imageData) {
      const insertValue = `${value}![${imageData.originalName}](${imageData.path}) \n`;

      onChange(insertValue);
    }
  };

  useEffect(() => {
    if (isError) {
      const error = (uploadError as IRequestError).data.message;
      setErrorMessage(error);
    }
  }, [isError]);

  useEffect(() => {
    insertValueInTextArea();
  }, [imageData]);

  // NEED TO REPLACE ICON

  const button: ICommand = {
    name: 'image',
    keyCommand: 'image',
    shortcuts: 'ctrlcmd+k',
    value: '![image]({{text}})',
    buttonProps: { 'aria-label': 'Add image (ctrl + k)', title: 'Add image (ctrl + k)' },
    icon: (
      <svg width='13' height='13' viewBox='0 0 20 20'>
        <path
          fill='currentColor'
          d='M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z'
        />
      </svg>
    ),
    execute: () => {
      inputRef.current?.click();
    },
  };

  return (
    <div style={{ width: '600px' }} className='container'>
      {errorMessage && <span>{errorMessage}</span>}
      <input ref={inputRef} type='file' onChange={handlerChange} hidden />
      <div data-color-mode='light'>
        <MDEditor
          textareaProps={textareaProps}
          id='MDarea'
          prefixCls='markdown-form'
          value={value}
          onChange={(val = '') => setFieldValue(textareaProps.name, val)}
          commands={[
            title1,
            title2,
            commands.divider,
            bold,
            italic,
            underline,
            commands.divider,
            commands.unorderedListCommand,
            commands.orderedListCommand,
            commands.divider,
            commands.link,
            button,
          ]}
          preview='edit'
          extraCommands={[]}
        />
      </div>
    </div>
  );
};

export default MarkdownForm;
