/*
// This is a placeholder for the actual Copilot API
export interface CopilotAgentPluginContext {
  registerCommand: (name: string, callback: Function) => void;
  // Add other methods as needed
}

export interface CopilotAgentPlugin {
  activate(): Promise<void>;
  deactivate(): Promise<void>;
}
  */

// filepath: /home/shahi/extension/src/types/copilot-agent-api.ts
export interface CopilotAgentPluginContext {
  registerCommand: (
    commandId: string,
    callback: (args: any) => Promise<string> | string
  ) => void;
  // Add any other methods or properties needed for your plugin context
}

export interface CopilotAgentPlugin {
  activate(): Promise<void>;
  deactivate(): Promise<void>;
}