# My Copilot Plugin

A custom plugin for GitHub Copilot that adds new capabilities.

## Features
- Hello World command :Simple test command to verify the plugin is working
- Component Generation: Generate component templates based on provided names
- Code Processing: Enhance and transform code with custom logic
- Suggestion Enhancement: Improve GitHub Copilot suggestions with custom rules
## Installation
1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Install in your Copilot agent

## Development

`npm run build` - Build the plugin
`npm run dev` - Watch for changes and rebuild
`npm run test` - Run tests
`npm run lint` - Lint the code

## Plugin Architecture
The plugin follows a modular architecture:

- `src/commands/`: Command implementations
- `src/core/`: Core processing logic
- `src/providers/`: Data providers and services
- `src/events/`: Event listeners
- `src/config/`: Configuration management
- `src/types/`: Type definitions
