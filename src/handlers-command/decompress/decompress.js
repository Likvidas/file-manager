import { basename, resolve } from 'path';
import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleDecompress = async (args) => {
  try {
    const sourceFilePath = resolve(workDirectory.getCWD(), args.split(' ')?.[0]);
    const fileName = basename(sourceFilePath);
    const targetFilePath = resolve(workDirectory.getCWD(), args.split(' ')?.[1], fileName);

    const source = createReadStream(sourceFilePath);
    const gzip = createBrotliDecompress();
    const destination = createWriteStream(targetFilePath);

    source.pipe(gzip).pipe(destination);
  } catch (error) {
    printError;
  }
};
