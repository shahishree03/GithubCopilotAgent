"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = exports.MyCopilotPlugin = void 0;
const helloWorld_1 = require("./commands/helloWorld");
const generatecomponent_1 = require("./commands/generatecomponent");
class MyCopilotPlugin {
    constructor(context) {
        this.context = context;
    }
    async activate() {
        console.log('My Copilot plugin activated!');
        // Register all commands
        (0, helloWorld_1.registerHelloWorldCommand)(this.context);
        (0, generatecomponent_1.registerGenerateComponentCommand)(this.context);
    }
    async deactivate() {
        console.log('My Copilot plugin deactivated!');
    }
}
exports.MyCopilotPlugin = MyCopilotPlugin;
function activate(context) {
    return new MyCopilotPlugin(context);
}
exports.activate = activate;
