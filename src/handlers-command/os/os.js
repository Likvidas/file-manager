import { printError } from '../../helpers/helpers.js';
import { handleArchitecture } from './handlers/architecture.js';
import { handleCpus } from './handlers/cpus.js';
import { handleEOL } from './handlers/eol.js';
import { handleHomedir } from './handlers/homedir.js';
import { handleUsername } from './handlers/username.js';

export const handleOs = async (command) => {
  try {
    switch (command) {
      case '--EOL':
        handleEOL();
        return;
      case '--cpus':
        await handleCpus();
        return;
      case '--homedir':
        handleHomedir();
        return;
      case '--username':
        handleUsername();
        return;
      case '--architecture':
        handleArchitecture();
        return;
      default:
        break;
    }
  } catch (error) {
    printError();
  }
};
