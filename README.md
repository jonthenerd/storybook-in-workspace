# storybook-in-workspace
These are my attemps to use storybook and TypeScript in a workspace setup. So far, I have not been successful in getting the tsdocs to appear as documentation within Storybook.

⚠️ This repo is strictly for testing and reproducing an issue.

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

Look for tsdoc-based documentation that says `(from the package)`. This is evidence of success.

4. Stop everything, make changes, repeat storybook step
