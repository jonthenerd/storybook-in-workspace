import type { StorybookConfig } from '@storybook/react-vite';

// The config that Storybook ships with
const vanillaConfig: StorybookConfig = {
  "stories": [    
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",    
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};

// Just switch to react-docgen-typescript
const tsConfig1: StorybookConfig = {
  ...vanillaConfig,
  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}

// Aligning with "Storybook doesn't create the required types for external packages"
// https://storybook.js.org/docs/configure/integration/typescript#storybook-doesnt-create-the-required-types-for-external-packages
const tsConfig2: StorybookConfig = {
  ...tsConfig1,
  typescript: {
    reactDocgen: "react-docgen",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      },
      propFilter: (prop) => {
        console.log("Hi!");
        return true;
        //prop.parent ? !/node_modules\/(?!@jonthenerd)/.test(prop.parent.fileName) : true,
      }
    }
  }
}

// Suggested configuration from https://github.com/storybookjs/storybook/issues/30767#issuecomment-2705031679
const aiSuggestedConfig: StorybookConfig = {
  ...vanillaConfig,   
  typescript: {     
    reactDocgen: 'react-docgen-typescript',     
    check: false,         
    reactDocgenTypescriptOptions: {       
      shouldExtractLiteralValuesFromEnum: true,       
      shouldRemoveUndefinedFromOptional: true,       
      propFilter: (prop) => {     
        const decision = prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
        console.log("Got one! " + prop.parent?.fileName + " " + decision); 
        return decision;       
      },       
      //include: ["../../packages/**/*.{ts,tsx}"]  // Adjust path to your workspace packages     
    }   
  } 
}

// From https://github.com/storybookjs/storybook/issues/30015#issuecomment-2536640555
const configWithTsConfigPath: StorybookConfig = {
  ...vanillaConfig,
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "./tsconfig.app.json", // This was required to show props from the extended component.
      propFilter: (prop) => {        
        const decision = prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
        console.log("Got one! " + prop.parent?.fileName + " " + decision); 
        return decision;       
      },      
    }
  }
}

// Works with all but importing from the package barrel
// Combines include prop from https://github.com/storybookjs/storybook/issues/30767#issuecomment-2705031679
// And tsconfigPath from https://github.com/storybookjs/storybook/issues/30015#issuecomment-2536640555
const aiSuggestedConfig2: StorybookConfig = {
  ...vanillaConfig,
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "./tsconfig.app.json", // This was required to show props from the extended component.
      propFilter: (prop) => {        
        const decision = prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
        console.log("Got one! " + prop.parent?.fileName + " " + decision); 
        return decision;       
      },      
      include: ["src/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"]
    }
  }
}

const tryingReactDocgenAgain: StorybookConfig = {
  ...vanillaConfig,
  typescript: {
    reactDocgen: "react-docgen"    
  }
}


export default tryingReactDocgenAgain;
