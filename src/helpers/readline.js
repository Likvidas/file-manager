import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

export const readline = createInterface({ input, output });
