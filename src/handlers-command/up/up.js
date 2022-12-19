import { join } from 'path';
import { workDirectory } from '../../helpers/helpers.js';

export const handleUp = () => {
  workDirectory.setCWD(join(workDirectory.getCWD(), '..'));
};
