<p align=right><img alt="Ribbon Logo" src="https://i.imgur.com/PvG16Rh.png" width=25%/></p>

# Ribbon Syntax

VS Code syntax highlighting extension for [Ribbon](https://github.com/ribbon-lang)

## Usage

Highlights files with `.bb` extension

#### You will need `node`/`npm`
I recommend installing those with [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

#### You will need `vsce`
```
$ npm i -g @vscode/vsce
```

#### Build and install the package
```
vscode-ribbon-syntax$ vsce package
vscode-ribbon-syntax$ code --install-extension ribbon-syntax-0.1.0.vsix
```
