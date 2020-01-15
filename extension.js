// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nvmNodeInclude" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.nvmNodeInclude', function () {
		// The code you place here will be executed every time your command is executed

        // just return out best guess as to the include directory for this version
        // of node. presume NVM_BIN var points to bin if it exists. if not, presume
        // /usr/local/include/node. no, it's not sophisticated.
        let includePath;
        if (process.env.NVM_BIN) {
            includePath = process.env.NVM_BIN.replace(/\/bin$/, '/include');
        } else {
            includePath = '/usr/local/include/node';
        }
        return Promise.resolve(includePath);
		//vscode.window.showInformationMessage('nvmNodeInclude active');
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
