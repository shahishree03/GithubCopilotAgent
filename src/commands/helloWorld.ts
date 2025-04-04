// filepath: /home/shahi/extension/src/commands/helloWorld.ts
import { CopilotAgentPluginContext } from '../types/copilot-agent-api';

export function registerHelloWorldCommand(context: CopilotAgentPluginContext) {
  return context.registerCommand('my-plugin.helloWorld', async () => {
    console.log('Hello World Command Registered');
    return 'Hello from the modular command structure!';
  });
}