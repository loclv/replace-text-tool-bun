# replace-text-tool-bun

A text replacement tool that replaces text with other text in the source files instead of replacing with editor.

## Usage

To install dependencies:

```bash
bun i
```

To run:

```bash
bun run index.ts

git diff
# expected result is `oldText` had been replaced.
```

This project was created using `bun init` in bun v1.1.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
