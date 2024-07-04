# replace-text-tool-bun

A text replacement tool that replaces text with other text in the source files instead of replacing with editor.

Replacement configuration:

- Match case insensitive: uppercase and lowercase letters are treated as distinct. For example, "Old" is not replaced with "old".
- Not match whole word. For example, "oldTextTest" is replaced with "newTextTest".
- You can replace array of texts sequentially.

TODO:

- Support nested folders

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

Replace array of text:

```bash
bun arr
```

This project was created using `bun init` in bun v1.1.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
