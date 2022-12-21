import { argv, stdout } from 'process';
import { stat } from 'fs/promises';
import { homedir } from 'os';
import { readline } from '../readline/readline.js';

export const printOutput = (message) => stdout.write(message + '\n');

const argumentUserName = argv
  .find((arg) => arg.toLowerCase().includes('username'))
  ?.split('=')
  ?.at(-1);

const getUserName = async () => await readline.question('What is your name? \n');

export const userName = argumentUserName || (await getUserName());

class CurrentWorkDirectory {
  _cwd = homedir();

  getCWD() {
    return this._cwd;
  }

  setCWD(directory) {
    this._cwd = directory;
  }
}

export const workDirectory = new CurrentWorkDirectory();

export const printDirectory = () => printOutput(`You are currently in ${workDirectory.getCWD()}`);

export const printError = () => printOutput('Operation failed');

export const checkOfExistence = (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);
