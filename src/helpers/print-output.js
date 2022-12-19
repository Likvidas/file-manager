import { stdout } from 'process';

export const printOutput = (message) => stdout.write(message + '\n');
