import { handleAdd } from '../handlers-command/add/add.js';
import { handleCat } from '../handlers-command/cat/cat.js';
import { handleCd } from '../handlers-command/cd/cd.js';
import { exitApp } from '../handlers-command/exit/exit.js';
import { handleLs } from '../handlers-command/ls/ls.js';
import { handleUp } from '../handlers-command/up/up.js';
import { printOutput } from '../helpers/helpers.js';

export const parseCommand = async (command) => {
  const parsedCommand = command.split(' ')?.[0];

  const commandArgs = command.replace(parsedCommand, '').trim();

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
    case 'ls':
      await handleLs();
      return;
    case 'cat':
      await handleCat(commandArgs);
      return;
    case 'add':
      await handleAdd(commandArgs);
      return;
    default:
      printOutput('Invalid input');
  }
};
