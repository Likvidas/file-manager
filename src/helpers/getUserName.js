import { argv } from 'process';

export const userName = argv
  .find((arg) => arg.toLowerCase().includes('username'))
  ?.split('=')
  ?.at(-1);
