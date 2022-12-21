import { stdout } from 'process';
import { createReadStream } from 'fs';
import { join, resolve } from 'path';
import { printError, workDirectory, checkOfExistence } from '../../helpers/helpers.js';

export const handleCat = async (newPath) => {
  try {
    const correctPath = resolve(workDirectory.getCWD(), newPath);

    const hasFileExists = await checkOfExistence(correctPath);

    if (!hasFileExists) {
      throw new Error();
    }
    const readStream = createReadStream(correctPath);

    readStream.pipe(stdout);
  } catch (error) {
    printError();
  }
};
