import { userInfo } from 'os';
import { printError, printOutput } from '../../../helpers/helpers.js';

export const handleUsername = () => {
  try {
    printOutput(userInfo().username);
  } catch (error) {
    printError();
  }
};
