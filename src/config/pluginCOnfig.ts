// src/config/pluginConfig.ts
export interface PluginConfig {
    enabled: boolean;
    customSettings: Record<string, any>;
  }
  
  export function loadConfig(): PluginConfig {
    // In a real implementation, this would load from storage
    return {
      enabled: true,
      customSettings: {}
    };
  }