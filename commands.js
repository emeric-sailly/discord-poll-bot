import 'dotenv/config';
import { DeleteAllCommands, InstallGlobalCommands } from './utils.js';

//Poll command
const POLL_COMMAND = {
  name: 'poll',
  description: 'Poll command',
  type: 1,
}

const ALL_COMMANDS = [POLL_COMMAND];

// InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);

DeleteAllCommands(process.env.APP_ID, ["1241005039766605846", "1241040266257891519", "1241005039766605845"]);