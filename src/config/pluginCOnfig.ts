// src/config/pluginConfig.ts
export interface PluginConfig {
  enabled: boolean;
  customSettings: Record<string, any>;
}

export function loadConfig(): PluginConfig {
  // In a real implementation, this would load from storage
  return {
    enabled: true,
    customSettings: {
      // Define your custom settings here
      enhanceComments: true,
      languagePreferences: {
        javascript: true,
        typescript: true,
        python: true
      },
      // Add other custom settings
      debugMode: false
    }
  };
}
