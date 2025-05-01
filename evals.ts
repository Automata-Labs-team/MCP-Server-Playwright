//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const BrowserNavigateEval: EvalFunction = {
    name: "BrowserNavigate Tool Evaluation",
    description: "Evaluates the ability to navigate to a given URL",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please navigate to https://example.com");
        return JSON.parse(result);
    }
};

const BrowserScreenshotEval: EvalFunction = {
    name: "BrowserScreenshotEval",
    description: "Evaluates the tool's ability to take a screenshot of the current page or a specific element",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please take a screenshot named 'header-screenshot' of the header element using the '.header' CSS selector.");
        return JSON.parse(result);
    }
};

const browserClickToolEvaluation: EvalFunction = {
    name: 'BrowserClick Tool Evaluation',
    description: 'Evaluates clicking an element using a CSS selector',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please use the CSS selector '#click-me-button' to click on the button.");
        return JSON.parse(result);
    }
};

const browserClickTextEval: EvalFunction = {
    name: 'BrowserClickText Tool Evaluation',
    description: 'Tests the functionality of clicking an element by its text content',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Find the element with the text 'Subscribe' on the page and click it.");
        return JSON.parse(result);
    }
};

const BrowserFillEval: EvalFunction = {
    name: "BrowserFill Tool Evaluation",
    description: "Evaluates filling out an input field in the browser",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please use the BrowserFill tool to fill the input field with selector '#username' and value 'JohnDoe'.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [BrowserNavigateEval, BrowserScreenshotEval, browserClickToolEvaluation, browserClickTextEval, BrowserFillEval]
};
  
export default config;
  
export const evals = [BrowserNavigateEval, BrowserScreenshotEval, browserClickToolEvaluation, browserClickTextEval, BrowserFillEval];