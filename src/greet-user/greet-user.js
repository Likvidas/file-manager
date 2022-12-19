import { printDirectory, printOutput, userName } from '../helpers/helpers.js';

export const greetUser = () => {
  const greetingMessage = `Welcome to the File Manager, ${userName}!`;

  printOutput(greetingMessage);
  printDirectory();
};
