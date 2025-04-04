"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHelloWorldCommand = void 0;
function registerHelloWorldCommand(context) {
    return context.registerCommand('my-plugin.helloWorld', async () => {
        console.log('Hello World Command Registered');
        return 'Hello from the modular command structure!';
    });
}
exports.registerHelloWorldCommand = registerHelloWorldCommand;
