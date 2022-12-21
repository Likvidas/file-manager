import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleCd = async (newPath) => {
  try {
    const newDirectory = resolve(workDirectory.getCWD(), newPath);

    await readdir(newDirectory);

    workDirectory.setCWD(newDirectory);
  } catch (error) {
    printError();
  }
};
