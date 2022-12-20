import { resolve } from 'path';
import { rm } from 'fs/promises';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleRm = async (args) => {
  try {
    const targetPath = resolve(workDirectory.getCWD(), args);

    await rm(targetPath);
  } catch (error) {
    printError();
  }
};
