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

export default tsConfig2;
