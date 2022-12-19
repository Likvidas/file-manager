import { handleCd } from '../handlers-command/cd/cd.js';
import { exitApp } from '../handlers-command/exit/exit.js';
import { handleUp } from '../handlers-command/up/up.js';
import { printOutput } from '../helpers/helpers.js';

export const parseCommand = async (command) => {
  const parsedCommand = command.split(' ')?.[0];

  const commandArgs = command.split(' ').slice(1);

  switch (parsedCommand) {
    case '.exit':
      exitApp();
      return;
    case 'up':
      handleUp();
      return;
    case 'cd':
      await handleCd(commandArgs);
      return;
    default:
      printOutput('Invalid input');
  }
};
