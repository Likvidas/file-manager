import { printOutput, userName } from '../../helpers/helpers.js';
import { readline } from '../../readline/readline.js';

export const handleExitApp = () => {
  const byeMessage = `Thank you for using File Manager, ${userName}, goodbye!`;

  readline.on('SIGINT', () => {
    printOutput(byeMessage);
    readline.close();
  });
};

export const exitApp = () => readline.emit('SIGINT');
