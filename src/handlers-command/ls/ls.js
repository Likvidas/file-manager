import { printError, workDirectory } from '../../helpers/helpers.js';
import { readdir } from 'fs/promises';

export const handleLs = async () => {
  try {
    const innerFolder = await readdir(workDirectory.getCWD(), { withFileTypes: true });
    const printData = [];

    innerFolder.forEach((element) => {
      if (element.isDirectory() || element.isFile()) {
        printData.push({
          name: element.name,
          type: element.isFile() ? 'File' : 'Directory',
        });
      }
    });

    const sortedPrintData = printData.sort((a, b) => {
      if (a.type > b.type) {
        return 1;
      }
      if (a.type < b.type) {
        return -1;
      }
      return 0;
    });

    console.table(sortedPrintData);
  } catch (error) {
    printError();
  }
};
