export interface CopilotAgentPluginContext {
    registerCommand: (commandId: string, callback: (args: any) => Promise<string> | string) => void;
}
export interface CopilotAgentPlugin {
    activate(): Promise<void>;
    deactivate(): Promise<void>;
}
