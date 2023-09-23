import type { ICommand, TextState, TextAreaTextApi } from '@uiw/react-md-editor';

export const title1: ICommand = {
  name: 'title1',
  keyCommand: 'title1',
  shortcuts: 'ctrlcmd+1',
  buttonProps: { 'aria-label': 'Insert title1 (ctrl + 1)', title: 'Insert title1 (ctrl + 1)' },
  icon: <span>H1</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `# ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `# `;
    }
    api.replaceSelection(modifyText);
  },
};

export const title2: ICommand = {
  name: 'title2',
  keyCommand: 'title2',
  shortcuts: 'ctrlcmd+2',
  buttonProps: { 'aria-label': 'Insert title1 (ctrl + 2)', title: 'Insert title1 (ctrl + 2)' },
  icon: <span>H2</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `## ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `## `;
    }
    api.replaceSelection(modifyText);
  },
};

export const underline: ICommand = {
  name: 'underline',
  keyCommand: 'underline',
  shortcuts: 'ctrlcmd+u',
  buttonProps: {
    'aria-label': 'Insert underline (ctrl + u)',
    title: 'Insert underline (ctrl + u)',
  },
  icon: <span>U</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `<u>${state.selectedText}<u> \n`;
    if (!state.selectedText) {
      modifyText = `<u><u>`;
    }
    api.replaceSelection(modifyText);
  },
};

export const italic: ICommand = {
  name: 'italic',
  keyCommand: 'italic',
  shortcuts: 'ctrlcmd+i',
  buttonProps: { 'aria-label': 'Add italic text (ctrl + i)', title: 'Add italic text (ctrl + i)' },
  icon: <span>I</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `*${state.selectedText}* \n`;
    if (!state.selectedText) {
      modifyText = `**`;
    }
    api.replaceSelection(modifyText);
  },
};

export const bold: ICommand = {
  name: 'bold',
  keyCommand: 'bold',
  shortcuts: 'ctrlcmd+b',
  buttonProps: { 'aria-label': 'Add bold text (ctrl + b)', title: 'Add bold text (ctrl + b)' },
  icon: <span>B</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `**${state.selectedText}** \n`;
    if (!state.selectedText) {
      modifyText = `****`;
    }
    api.replaceSelection(modifyText);
  },
};
