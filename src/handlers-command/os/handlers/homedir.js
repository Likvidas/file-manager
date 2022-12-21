import { printOutput } from '../../../helpers/helpers.js';
import { homedir } from 'os';

export const handleHomedir = () => printOutput(homedir());
