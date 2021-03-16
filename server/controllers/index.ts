import { CommandsController } from './commands/commands';
import { TriggersController } from './triggers/triggers';

const commandsController = new CommandsController();
const triggersController = new TriggersController();

export {
    commandsController,
    triggersController
};