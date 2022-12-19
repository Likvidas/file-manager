import { stdout } from 'process';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleCat = async (newPath) => {
  try {
    const correctPath = resolve(workDirectory.getCWD(), newPath);

    const readStream = createReadStream(correctPath);

    readStream.pipe(stdout);
  } catch (error) {
    printError();
  }
};
