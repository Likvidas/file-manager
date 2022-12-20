import { cpus } from 'os';
import { printError, printOutput } from '../../../helpers/helpers.js';

export const handleCpus = () => {
  try {
    const totalCountCPUS = cpus().length;
    const detailInfoList = cpus().map(({ model, speed }) => ({ model, speed: `${(speed / 1000).toFixed(2)}GHz` }));

    console.dir({ totalCountCPUS, detailInfoList });
  } catch (error) {
    printError();
  }
};
