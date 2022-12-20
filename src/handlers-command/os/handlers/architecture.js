import { arch } from 'os';
import { printError, printOutput } from '../../../helpers/helpers.js';

export const handleArchitecture = () => {
  try {
    printOutput(arch());
  } catch (error) {
    printError();
  }
};
