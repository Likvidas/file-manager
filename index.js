import { stdin, stdout, argv } from 'process';

const userName = argv
  .find((arg) => arg.toLowerCase().includes('username'))
  .split('=')
  .at(-1);

const greatingMessage = `Welcome to the File Manager, ${userName}! \n`;

stdout.write(greatingMessage);
