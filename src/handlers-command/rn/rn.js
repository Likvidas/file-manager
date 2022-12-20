import { rename } from 'fs/promises';
import { join, resolve, dirname } from 'path';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleRn = async (args) => {
  try {
    const targetPath = resolve(workDirectory.getCWD(), args.split(' ')?.[0]);
    const newFileName = args.split(' ')?.[1];
    const newFilePath = resolve(dirname(targetPath), newFileName);

    await rename(targetPath, newFilePath);
  } catch (error) {
    printError();
  }
};
