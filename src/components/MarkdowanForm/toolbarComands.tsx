import type { ICommand, TextState, TextAreaTextApi } from '@uiw/react-md-editor';

export const title1: ICommand = {
  name: 'title1',
  keyCommand: 'title1',
  buttonProps: { 'aria-label': 'Insert title2' },
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
  buttonProps: { 'aria-label': 'Insert title2' },
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
  buttonProps: { 'aria-label': 'Insert underline' },
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
  buttonProps: { 'aria-label': 'Insert italic' },
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
  buttonProps: { 'aria-label': 'Insert bold' },
  icon: <span>B</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `**${state.selectedText}** \n`;
    if (!state.selectedText) {
      modifyText = `****`;
    }
    api.replaceSelection(modifyText);
  },
};
