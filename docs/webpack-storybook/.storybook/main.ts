import type { StorybookConfig } from '@storybook/react-webpack5';

const vanillaConfig: StorybookConfig = {
  logLevel: "debug",
  stories: [    
    "../src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials"    
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
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
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      },
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@jonthenerd)/.test(prop.parent.fileName) : true,
    }
  }
}

// From https://github.com/storybookjs/storybook/issues/25659#issuecomment-1914614824
const adjustedWebpack: StorybookConfig = {
  ...vanillaConfig,
  webpackFinal: async (config) => {
    config.module!.rules!.forEach(
      (rule: any) => {
        if(rule.loader?.includes('react-docgen')) {
          // the default is: /(\.(stories|story)\.(js|jsx|ts|tsx))|(node_modules)/
          rule.exclude = /(\.(stories|story)\.(js|jsx|ts|tsx))/
        }
      });
      return config;
  }
}

const adjustedWebpack2: StorybookConfig = {
  ...vanillaConfig,
  webpackFinal: async (config) => {
    config.module!.rules!.forEach(
      (rule: any) => {
        if(rule.loader?.includes('react-docgen')) {
          // the default is: /(\.(stories|story)\.(js|jsx|ts|tsx))|(node_modules)/
          rule.exclude = /(\.(stories|story)\.(js|jsx|ts|tsx))|(node_modules(?!\/@jonthenerd\/ui))/
        }
      });
      return config;
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
        console.log("Got one!" + prop.parent?.fileName); // This never logs anything.
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;       
      },       
      //include: ["../../packages/**/*.{ts,tsx}"]  // Adjust path to your workspace packages     
    }   
  } 
}

export default aiSuggestedConfig;
