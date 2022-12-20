import { printError } from '../../helpers/helpers.js';
import { handleCpus } from './handlers/cpus.js';
import { handleEOL } from './handlers/eol.js';

export const handleOs = async (command) => {
  try {
    switch (command) {
      case '--EOL':
        handleEOL();
        return;
      case '--cpus':
        await handleCpus();
        return;

      default:
        break;
    }
  } catch (error) {
    printError();
  }
};
