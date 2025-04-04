import { CopilotAgentPluginContext } from '../types/copilot-agent-api';

export interface LocalCopilotAgentPluginContext {
    registerCommand: (
      commandId: string,
      callback: (args: any) => Promise<string> | string
    ) => void;
    
    // Add the event listener method
    on: (eventName: string, callback: (data: any) => void) => void;
    
    // Keep any other methods you've defined
  }
  
  export interface CopilotAgentPlugin {
    activate(): Promise<void>;
    deactivate(): Promise<void>;
  }