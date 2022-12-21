import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { printError, printOutput, workDirectory } from '../../helpers/helpers.js';

export const handleHash = async (targetPath) => {
  try {
    const resultPath = resolve(workDirectory.getCWD(), targetPath);
    console.log('Bingo', resultPath);

    const data = await readFile(resultPath, 'utf-8');
    const hash = createHash('SHA256').update(data).digest('hex');

    printOutput(hash);
  } catch (error) {
    printError();
  }
};
