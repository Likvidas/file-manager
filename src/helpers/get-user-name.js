import { argv } from 'process';
import { readline } from './readline.js';

const argumentUserName = argv
  .find((arg) => arg.toLowerCase().includes('username'))
  ?.split('=')
  ?.at(-1);

const getUserName = async () => await readline.question('What is your name? \n');

export const userName = argumentUserName || (await getUserName());
