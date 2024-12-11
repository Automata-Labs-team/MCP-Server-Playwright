<h1 align="center">MCP Server Playwright</h1>
<p align="center">
  <a href="https://www.automatalabs.io"><img alt="MCP Playwright" src="https://automatalabs.io/icon.svg" height="250"/></a>
</p>
<p align="center">
  <b>A Model Context Protocol server that provides browser automation capabilities using Playwright</b></br>
  <sub>Enable LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment</sub>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@automatalabs/mcp-server-playwright"><img alt="NPM Version" src="https://img.shields.io/npm/v/@automatalabs/mcp-server-playwright.svg" height="20"/></a>
  <a href="https://npmcharts.com/compare/@automatalabs/mcp-server-playwright?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@automatalabs/mcp-server-playwright.svg" height="20"/></a>
  <a href="https://github.com/Automata-Labs-team/MCP-Server-Playwright/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/Automata-Labs-team/MCP-Server-Playwright.svg" height="20"/></a>
</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Components](#components)
  - [Tools](#tools)
  - [Resources](#resources)
- [License](#license)

## Features

- 🌐 Full browser automation capabilities
- 📸 Screenshot capture of entire pages or specific elements
- 🖱️ Comprehensive web interaction (navigation, clicking, form filling)
- 📊 Console log monitoring
- 🔧 JavaScript execution in browser context

## Installation
You can install the package using either npx or mcp-get:

Using npx:
```bash
npx @automatalabs/mcp-server-playwright install
```
This command will:
1. Check your operating system compatibility (Windows/macOS)
2. Create or update the Claude configuration file
3. Configure the Playwright server integration

The configuration file will be automatically created/updated at:
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

Using mcp-get:
```bash
npx @michaellatman/mcp-get@latest install @automatalabs/mcp-server-playwright
```

## Configuration

The installation process will automatically add the following configuration to your Claude config file:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@automatalabs/mcp-server-playwright"]
    }
  }
}
```

## Components

### Tools

#### `playwright_navigate`
Navigate to any URL in the browser
```javascript
{
  "url": "https://stealthbrowser.cloud"
}
```

#### `playwright_screenshot`
Capture screenshots of the entire page or specific elements
```javascript
{
  "name": "screenshot-name",     // required
  "selector": "#element-id",     // optional
  "fullPage": true              // optional, default: false
}
```

#### `playwright_click`
Click elements on the page using CSS selector
```javascript
{
  "selector": "#button-id"
}
```

#### `playwright_click_text`
Click elements on the page by their text content
```javascript
{
  "text": "Click me"
}
```

#### `playwright_hover`
Hover over elements on the page using CSS selector
```javascript
{
  "selector": "#menu-item"
}
```

#### `playwright_hover_text`
Hover over elements on the page by their text content
```javascript
{
  "text": "Hover me"
}
```

#### `playwright_fill`
Fill out input fields
```javascript
{
  "selector": "#input-field",
  "value": "Hello World"
}
```

#### `playwright_select`
Select an option in a SELECT element using CSS selector
```javascript
{
  "selector": "#dropdown",
  "value": "option-value"
}
```

#### `playwright_select_text`
Select an option in a SELECT element by its text content
```javascript
{
  "text": "Choose me",
  "value": "option-value"
}
```

#### `playwright_evaluate`
Execute JavaScript in the browser console
```javascript
{
  "script": "document.title"
}
```

### Resources

1. **Console Logs** (`console://logs`)
   - Access browser console output in text format
   - Includes all console messages from the browser

2. **Screenshots** (`screenshot://<name>`)
   - Access PNG images of captured screenshots
   - Referenced by the name specified during capture

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Automata-Labs-team/MCP-Server-Playwright/blob/main/LICENSE) file for details.
