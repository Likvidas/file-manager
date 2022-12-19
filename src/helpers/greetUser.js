import { printOutput } from './printOutput.js';
import { userName } from './getUserName.js';

export const greetUser = () => {
  const greetingMessage = `Welcome to the File Manager, ${userName}! \n`;

  printOutput(greetingMessage);
};
