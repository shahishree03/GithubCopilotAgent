// src/commands/processCode.ts
import { CopilotAgentPluginContext } from '../types/copilot-agent-api';
import { CodeProcessor } from '../core/processor';

export function registerProcessCodeCommand(context: CopilotAgentPluginContext) {
  const processor = new CodeProcessor();
  
  return context.registerCommand('my-plugin.processCode', async (args) => {
    const { code, language } = args;
    return processor.processCode(code, language);
  });
}