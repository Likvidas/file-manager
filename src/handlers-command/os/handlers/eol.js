import { EOL } from 'os';
import { printOutput } from '../../../helpers/helpers.js';

export const handleEOL = () => printOutput(JSON.stringify(EOL));
