# storybook-in-workspace
Attempting to use storybook and TypeScript in a workspace setup. So far, failures to get the tsdocs from the package using either vite or webpack

## Usage
1. Install Dependencies
```sh
pnpm i
```

2. Build the components package
```sh
pnpm run -r build
```

3. Run storybook and see results
```sh
pnpm run -r storybook
```

4. Stop everything, make changes, repeat storybook step
