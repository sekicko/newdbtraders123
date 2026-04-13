// Polyfill for CommonJS require() in browser environment
// This is needed for Blockly which uses dynamic require() calls

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Module cache for require polyfill
const modules: Record<string, any> = {
  'react': React,
  'react-dom': ReactDOM,
};

// Polyfill require function
function requirePolyfill(moduleName: string): any {
  if (modules[moduleName]) {
    return modules[moduleName];
  }
  
  // For unknown modules, return a proxy that won't crash
  return {};
}

// Make it globally available
if (typeof window !== 'undefined') {
  (window as any).require = requirePolyfill;
}

export default requirePolyfill;

