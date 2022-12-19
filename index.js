import { handleExitApp } from './src/handlers-command/exit/exit.js';
import { greetUser } from './src/greet-user/greet-user.js';
import { readline } from './src/readline/readline.js';
import { parseCommand } from './src/parse-command/parse-command.js';
import { printDirectory } from './src/helpers/helpers.js';

const initApp = async () => {
  greetUser();
  handleExitApp();

  readline.on('line', (inputData) => {
    parseCommand(inputData);
    printDirectory();
  });
};

initApp();
