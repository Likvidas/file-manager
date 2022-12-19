import { userName } from '../helpers/get-user-name.js';
import { printOutput } from '../helpers/print-output.js';
import { readline } from '../helpers/readline.js';

export const quitterApp = () => {
  const byeMessage = `Thank you for using File Manager, ${userName}, goodbye!`;

  readline.on('SIGINT', () => {
    printOutput(byeMessage);
    readline.close();
  });
};

export const exitApp = () => readline.emit('SIGINT');
