import { userName } from '../helpers/get-user-name.js';
import { printOutput } from '../helpers/print-output.js';

export const greetUser = () => {
  const greetingMessage = `Welcome to the File Manager, ${userName}!`;

  printOutput(greetingMessage);
};
