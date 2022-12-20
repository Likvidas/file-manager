import { handleAdd } from '../handlers-command/add/add.js';
import { handleCat } from '../handlers-command/cat/cat.js';
import { handleCd } from '../handlers-command/cd/cd.js';
import { handleCp } from '../handlers-command/cp/cp.js';
import { exitApp } from '../handlers-command/exit/exit.js';
import { handleLs } from '../handlers-command/ls/ls.js';
import { handleMv } from '../handlers-command/mv/mv.js';
import { handleOs } from '../handlers-command/os/os.js';
import { handleRm } from '../handlers-command/rm/rm.js';
import { handleRn } from '../handlers-command/rn/rn.js';
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
    case 'rn':
      await handleRn(commandArgs);
      return;
    case 'cp':
      await handleCp(commandArgs);
      return;
    case 'mv':
      await handleMv(commandArgs);
      return;
    case 'rm':
      await handleRm(commandArgs);
      return;
    case 'os':
      await handleOs(commandArgs);
      return;
    default:
      printOutput('Invalid input');
  }
};
