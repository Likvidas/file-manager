import { resolve, basename } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleCp = async (args) => {
  try {
    const sourceFilePath = resolve(workDirectory.getCWD(), args.split(' ')?.[0]);
    const targetDirectoryPath = resolve(workDirectory.getCWD(), args.split(' ')?.[1]);
    const fileName = basename(sourceFilePath);
    const targetFilePath = resolve(targetDirectoryPath, fileName);

    const readStream = createReadStream(sourceFilePath);
    const writeStream = createWriteStream(targetFilePath);

    readStream.pipe(writeStream);

    return {
      isCopySuccess: true,
      sourceFilePath,
    };
  } catch (error) {
    printError();
    return {
      isCopySuccess: false,
      sourceFilePath,
    };
  }
};
