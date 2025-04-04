// src/types/copilot-agent-api.ts

/**
 * Context provided to the plugin by the Copilot agent
 */
export interface CopilotAgentPluginContext {
  /**
   * Register a command that can be invoked by the Copilot agent
   * @param commandId Unique identifier for the command
   * @param callback Function to execute when the command is invoked
   */
  registerCommand: (
    commandId: string,
    callback: (args: any) => Promise<string> | string
  ) => void;

  /**
   * Get workspace information (placeholder for potential API)
   */
  getWorkspaceInfo?: () => Promise<WorkspaceInfo>;

  /**
   * Get current editor state (placeholder for potential API)
   */
  getCurrentEditorState?: () => Promise<EditorState>;
}

/**
 * Definition of a Copilot Agent Plugin
 */
export interface CopilotAgentPlugin {
  /**
   * Called when the plugin is loaded and activated
   */
  activate(): Promise<void>;

  /**
   * Called when the plugin is being deactivated
   */
  deactivate(): Promise<void>;
}

/**
 * Information about the current workspace
 */
export interface WorkspaceInfo {
  /**
   * Root folder of the workspace
   */
  rootPath: string;

  /**
   * Language of the current file
   */
  language?: string;

  /**
   * Project type (e.g., nodejs, python, etc.)
   */
  projectType?: string;
}

/**
 * State of the current editor
 */
export interface EditorState {
  /**
   * Current file path
   */
  filePath?: string;

  /**
   * Current file content
   */
  content?: string;

  /**
   * Current cursor position
   */
  cursorPosition?: {
    line: number;
    column: number;
  };

  /**
   * Current selection
   */
  selection?: {
    start: {
      line: number;
      column: number;
    };
    end: {
      line: number;
      column: number;
    };
  };
}
