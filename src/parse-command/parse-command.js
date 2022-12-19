import { exitApp } from '../handlers-command/exit/exit.js';
import { handleUp } from '../handlers-command/up/up.js';
import { printOutput } from '../helpers/helpers.js';

export const parseCommand = (command) => {
  switch (command) {
    case '.exit':
      exitApp();
      return;
    case 'up':
      handleUp();
      break;

    default:
      printOutput('Invalid input');
  }
};
