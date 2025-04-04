import { CopilotAgentPlugin, CopilotAgentPluginContext } from './types/copilot-agent-api';
export declare class MyCopilotPlugin {
    private context;
    constructor(context: CopilotAgentPluginContext);
    activate(): Promise<void>;
    deactivate(): Promise<void>;
}
export declare function activate(context: CopilotAgentPluginContext): CopilotAgentPlugin;
