import { exitApp } from '../bye-user/bye-user.js';
import { printOutput } from '../helpers/print-output.js';

export const printInvalidCommand = () => printOutput('Invalid input');

export const parseCommand = (command) => {
  switch (command) {
    case '.exit':
      exitApp();
      return;

    default:
      printInvalidCommand();
  }
};
