import { resolve, basename } from 'path';
import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleCompress = async (args) => {
  try {
    const sourceFilePath = resolve(workDirectory.getCWD(), args.split(' ')?.[0]);
    const fileName = basename(sourceFilePath);
    // const targetFilePath = resolve(workDirectory.getCWD(), args.split(' ')?.[1], `${fileName}.br`);
    const targetFilePath = resolve(workDirectory.getCWD(), args.split(' ')?.[1], fileName);

    const gzip = createBrotliCompress();
    const source = createReadStream(sourceFilePath);
    const destination = createWriteStream(targetFilePath);

    source.pipe(gzip).pipe(destination);
  } catch (error) {
    printError;
  }
};
