// src/index.ts
import { CopilotAgentPlugin, CopilotAgentPluginContext } from './types/copilot-agent-api';
import { registerHelloWorldCommand } from './commands/helloWorld';
import { registerGenerateComponentCommand } from './commands/generatecomponent';
import { registerProcessCodeCommand } from './commands/processCode';
import { loadConfig } from './config/pluginCOnfig';
import { registerEventListeners } from './events/listeners';

export class MyCopilotPlugin implements CopilotAgentPlugin {
  private context: CopilotAgentPluginContext;
  private config: any;
  
  constructor(context: CopilotAgentPluginContext) {
    this.context = context;
    this.config = loadConfig();
  }
  
  async activate(): Promise<void> {
    console.log('My Copilot plugin activated!');
    
    if (this.config.enabled) {
      // Register all commands
      registerHelloWorldCommand(this.context);
      registerGenerateComponentCommand(this.context);
      registerProcessCodeCommand(this.context);
      
      // Register event listeners
      registerEventListeners(this.context);
      
      console.log('All commands and listeners registered successfully');
    } else {
      console.log('Plugin is disabled in configuration');
    }
  }
  
  async deactivate(): Promise<void> {
    console.log('My Copilot plugin deactivated!');
    // Perform any cleanup operations here
  }
}

export function activate(context: CopilotAgentPluginContext): CopilotAgentPlugin {
  return new MyCopilotPlugin(context);
}
