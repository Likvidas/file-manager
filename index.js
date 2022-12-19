import { quitterApp } from './src/bye-user/bye-user.js';
import { greetUser } from './src/greet-user/greet-user.js';
import { readline } from './src/helpers/readline.js';
import { parseCommand } from './src/parse-command/parse-command.js';

const initApp = async () => {
  greetUser();
  quitterApp();

  readline.on('line', (inputData) => {
    parseCommand(inputData);
  });
};

initApp();
