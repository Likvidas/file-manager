import { printError } from '../../helpers/helpers.js';
import { handleCp } from '../cp/cp.js';
import { rm } from 'fs/promises';

export const handleMv = async (args) => {
  try {
    const { isCopySuccess, sourceFilePath } = await handleCp(args);

    if (!isCopySuccess) {
      throw new Error();
    }

    await rm(sourceFilePath);
  } catch (error) {
    printError();
  }
};
