import { join } from 'path';
import { writeFile } from 'fs/promises';
import { printError, workDirectory } from '../../helpers/helpers.js';

export const handleAdd = async (path) => {
  try {
    const targetPath = join(workDirectory.getCWD(), path);

    await writeFile(targetPath, '');
  } catch (error) {
    printError();
  }
};
