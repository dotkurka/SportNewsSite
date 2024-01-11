import {
  type ICommand,
  type TextState,
  type TextAreaTextApi,
  commands,
} from '@uiw/react-md-editor';

import { ReactComponent as LinkButton } from 'assets/images/link-form-icon.svg';
import { ReactComponent as OListButton } from 'assets/images/o-list-icon.svg';
import { ReactComponent as UListButton } from 'assets/images/u-list-icon.svg';

import './MarkdownForm.scss';

const title1: ICommand = {
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

const title2: ICommand = {
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

const underline: ICommand = {
  name: 'underline',
  keyCommand: 'underline',
  shortcuts: 'ctrlcmd+u',
  buttonProps: {
    'aria-label': 'Insert underline (ctrl + u)',
    title: 'Insert underline (ctrl + u)',
  },
  icon: <span className='markdown-form-toolbar-underline'>U</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `<u>${state.selectedText}<u> \n`;
    if (!state.selectedText) {
      modifyText = `<u><u>`;
    }
    api.replaceSelection(modifyText);
  },
};

const italic: ICommand = {
  name: 'italic',
  keyCommand: 'italic',
  shortcuts: 'ctrlcmd+i',
  buttonProps: { 'aria-label': 'Add italic text (ctrl + i)', title: 'Add italic text (ctrl + i)' },
  icon: <span className='markdown-form-toolbar-italic'>I</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `*${state.selectedText}* \n`;
    if (!state.selectedText) {
      modifyText = `**`;
    }
    api.replaceSelection(modifyText);
  },
};

const bold: ICommand = {
  name: 'bold',
  keyCommand: 'bold',
  shortcuts: 'ctrlcmd+b',
  buttonProps: { 'aria-label': 'Add bold text (ctrl + b)', title: 'Add bold text (ctrl + b)' },
  icon: <span className='markdown-form-toolbar-bold'>B</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `**${state.selectedText}** \n`;
    if (!state.selectedText) {
      modifyText = `****`;
    }
    api.replaceSelection(modifyText);
  },
};

const { icon: _uIcon, ...uListComand } = commands.unorderedListCommand;
const uList: ICommand = {
  icon: <UListButton />,
  ...uListComand,
};

const { icon: _oIcon, ...oListComand } = commands.orderedListCommand;
const oList: ICommand = {
  icon: <OListButton />,
  ...oListComand,
};

const link: ICommand = {
  name: 'link',
  keyCommand: 'link',
  shortcuts: 'ctrlcmd+l',
  buttonProps: { 'aria-label': 'Add a link (ctrl + l)', title: 'Add a link (ctrl + l)' },
  icon: <LinkButton />,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `[${state.selectedText}](URL Here) \n`;
    if (!state.selectedText) {
      modifyText = '[](URL Here)';
    }
    api.replaceSelection(modifyText);
  },
};

export default { title1, title2, underline, italic, bold, uList, oList, link };
