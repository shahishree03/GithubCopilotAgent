// src/index.ts
import { CopilotAgentPlugin, CopilotAgentPluginContext } from './types/copilot-agent-api';
import { registerHelloWorldCommand } from './commands/helloWorld';
import { registerGenerateComponentCommand } from './commands/generatecomponent';

export class MyCopilotPlugin {
  private context: CopilotAgentPluginContext;
  
  constructor(context: CopilotAgentPluginContext) {
    this.context = context;
  }
  
  async activate(): Promise<void> {
    console.log('My Copilot plugin activated!');
    
    // Register all commands
    registerHelloWorldCommand(this.context);
    registerGenerateComponentCommand(this.context);
  }
  
  async deactivate(): Promise<void> {
    console.log('My Copilot plugin deactivated!');
  }
}

export function activate(context: CopilotAgentPluginContext): CopilotAgentPlugin {
  return new MyCopilotPlugin(context);
}