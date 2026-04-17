---
title: Docs
search: false
---

<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

# Docs

Documentation pages in this project are written in Markdown. Each `.md` file is turned into a standalone VitePress page.

- Official VitePress Markdown documentation: [vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown)
- Basic Markdown syntax: [markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax/)

Below is a fuller reference of Markdown and VitePress Markdown Extensions. Each item shows the syntax first and the rendered result after it. If needed, one page can also be assembled from multiple Markdown files via VitePress include mechanics.

[[toc]]

## **Editing Pages Through Decap CMS**

This project includes a Decap CMS admin panel. You can use it to edit existing pages and create new ones without manually editing repository files.

The admin panel is available at:

- locally: `http://localhost:5173/bixbit.docs/admin/`
- on the deployed site: `/bixbit.docs/admin/`

Based on the current configuration, Decap works with the GitHub repository and uses `editorial_workflow`. That means changes go through draft and publish states instead of going live immediately.

### How to edit an existing page

1. Open the admin panel and sign in with GitHub.
2. Open the `Documentation Pages` collection.
3. Find the page you want to edit.
4. Update the `Title` field or the page content in `Body`.
5. Save it as a draft or move it forward for publishing, depending on the current status.

### How to add a new page

1. Open `Documentation Pages`.
2. Click `New Documentation Page`.
3. Fill in `Title`.
4. Set the page location in the `Path` field.
5. Add the page content in Markdown in the `Body` field.
6. Save it as a draft or send it for publishing.

### How to fill in the `Path` field

The `Path` field defines where the page file will be created. In the current configuration, new pages use `index.md` inside the specified folder.

Examples:

- `ru/getting-started` -> `docs/ru/getting-started/index.md`
- `en/getting-started` -> `docs/en/getting-started/index.md`
- `ru/guides/setup` -> `docs/ru/guides/setup/index.md`

If you need both Russian and English versions of the same page, the path should be created for both locales.

### What can be edited through Decap

With the current setup, the admin panel edits regular Markdown pages inside the `docs` folder. Custom Vue components, the VitePress theme, sidebar config, and files in `.vitepress` are not edited through this form.

## Frontmatter

Frontmatter lives at the top of the file and controls page metadata such as title, description, sidebar title, and other page options. It does not render in the visible page body.

**Markdown**

```yaml
---
title: Docs
description: Documentation page example
---
```

**Rendered result**

This block affects the page configuration, but it is not rendered as visible content.

## Custom Vue components in Markdown

VitePress allows you to use Vue components directly inside a `.md` page. To do that, import the component in a `<script setup>` block and then render it like a regular tag.

This project already has a `DownloadFileButton` component. It accepts these props:

- `label` - button text
- `href` - file link

**Markdown**

````md
<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

<DownloadFileButton
  label="User manual.pdf"
  href="/files/user-manual.pdf"
/>
````

**Rendered result**

<DownloadFileButton
  label="User manual.pdf"
  href="/files/user-manual.pdf"
/>

## Custom component without props

If you do not pass props, the component falls back to its default values.

**Markdown**

```md
<DownloadFileButton />
```

**Rendered result**

<DownloadFileButton />

## Custom component with a different label

You can reuse the same component with a different `label`.

**Markdown**

```md
<DownloadFileButton label="Installation guide.pdf" />
```

**Rendered result**

<DownloadFileButton label="Installation guide.pdf" />

## Table of contents

`[[toc]]` automatically generates a table of contents from headings on the page.

**Markdown**

```md
[[toc]]
```

**Rendered result**

A live example is already shown near the top of this page.

## Headings and anchors {#docs-headings}

Headings automatically get anchors. You can also define a custom `id`.

**Markdown**

```md
## Second-level heading
### Third-level heading
### Custom anchor {#custom-anchor-demo}
```

**Rendered result**

## Second-level heading
### Third-level heading
### Custom anchor {#custom-anchor-demo}

Link to the custom anchor: [#custom-anchor-demo](#custom-anchor-demo)

## Paragraphs

A new paragraph starts after an empty line.

**Markdown**

```md
This is the first paragraph.

This is the second paragraph.
```

**Rendered result**

This is the first paragraph.

This is the second paragraph.

## Text formatting and inline code

**Markdown**

```md
**Bold text**
*Italic text*
***Bold italic***
~~Strikethrough text~~
`inline code`
```

**Rendered result**

**Bold text**
*Italic text*
***Bold italic***
~~Strikethrough text~~
`inline code`

## External link

**Markdown**

```md
[VitePress documentation](https://vitepress.dev/guide/markdown)
```

**Rendered result**

[VitePress documentation](https://vitepress.dev/guide/markdown)

## Internal link

Internal links point to other documentation pages.

**Markdown**

```md
[UI Kit](./ui-kit.md)
```

**Rendered result**

[UI Kit](./ui-kit.md)

## Image

**Markdown**

```md
![AMS logo](/images/logo.svg)
```

**Rendered result**

![AMS logo](/images/logo.svg)

## Bulleted list

**Markdown**

```md
- First item
- Second item
- Third item
```

**Rendered result**

- First item
- Second item
- Third item

## Numbered list

**Markdown**

```md
1. First step
2. Second step
3. Third step
```

**Rendered result**

1. First step
2. Second step
3. Third step

## Checklist

**Markdown**

```md
- [x] Done
- [ ] To do
```

**Rendered result**

- [x] Done
- [ ] To do

## Quote

**Markdown**

```md
> This is a quote example.
>
> This is the second line in the same quote.
```

**Rendered result**

> This is a quote example.
>
> This is the second line in the same quote.

## Divider

**Markdown**

```md
---
```

**Rendered result**

---

## Table

**Markdown**

```md
| Column A | Column B | Alignment |
| -------- | :------: | --------: |
| text     |  center  |     right |
| number   |    42    |        99 |
```

**Rendered result**

| Column A | Column B | Alignment |
| -------- | :------: | --------: |
| text     |  center  |     right |
| number   |    42    |        99 |

## Emoji

**Markdown**

```md
:tada: :rocket: :+1:
```

**Rendered result**

:tada: :rocket: :+1:

## `info` block

**Markdown**

```md
::: info
Informational block.
:::
```

**Rendered result**

::: info
Informational block.
:::

## `tip` block

**Markdown**

```md
::: tip
Helpful tip.
:::
```

**Rendered result**

::: tip
Helpful tip.
:::

## `warning` block

**Markdown**

```md
::: warning
Important warning.
:::
```

**Rendered result**

::: warning
Important warning.
:::

## `danger` block

**Markdown**

```md
::: danger
Critical warning.
:::
```

**Rendered result**

::: danger
Critical warning.
:::

## `details` block

**Markdown**

````md
::: details Click to expand
Hidden content.

```js
console.log('inside details')
```
:::
````

**Rendered result**

::: details Click to expand
Hidden content.

```js
console.log('inside details')
```
:::

## `details` block open by default

**Markdown**

````md
::: details Open block {open}
```js
console.log('opened by default')
```
:::
````

**Rendered result**

::: details Open block {open}
```js
console.log('opened by default')
```
:::

## Block with a custom title

**Markdown**

```md
::: danger STOP
Do not continue without checking.
:::
```

**Rendered result**

::: danger STOP
Do not continue without checking.
:::

## GitHub Alert `NOTE`

**Markdown**

```md
> [!NOTE]
> Use this for notes that matter while skimming.
```

**Rendered result**

> [!NOTE]
> Use this for notes that matter while skimming.

## GitHub Alert `TIP`

**Markdown**

```md
> [!TIP]
> Use this for optional helpful guidance.
```

**Rendered result**

> [!TIP]
> Use this for optional helpful guidance.

## GitHub Alert `IMPORTANT`

**Markdown**

```md
> [!IMPORTANT]
> Use this for required information.
```

**Rendered result**

> [!IMPORTANT]
> Use this for required information.

## GitHub Alert `WARNING`

**Markdown**

```md
> [!WARNING]
> Use this when there is real risk.
```

**Rendered result**

> [!WARNING]
> Use this when there is real risk.

## GitHub Alert `CAUTION`

**Markdown**

```md
> [!CAUTION]
> Use this for negative consequences of an action.
```

**Rendered result**

> [!CAUTION]
> Use this for negative consequences of an action.

## Syntax-highlighted code block

**Markdown**

````md
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```
````

**Rendered result**

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```

## Line highlighting in code

**Markdown**

````md
```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```
````

**Rendered result**

```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```

## Inline line highlight comment

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'highlighted' // [!code highlight]
    }
  }
}
```
````

**Rendered result**

```js
export default {
  data() {
    return {
      msg: 'highlighted' // [!code highlight]
    }
  }
}
```

## Focused line in code

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'focused' // [!code focus]
    }
  }
}
```
````

**Rendered result**

```js
export default {
  data() {
    return {
      msg: 'focused' // [!code focus]
    }
  }
}
```

## Diff lines in code

**Markdown**

````md
```js
export default {
  data() {
    return {
      old: 'removed' // [!code --]
      neu: 'added' // [!code ++]
    }
  }
}
```
````

**Rendered result**

```js
export default {
  data() {
    return {
      old: 'removed' // [!code --]
      neu: 'added' // [!code ++]
    }
  }
}
```

## Warning and error lines in code

**Markdown**

````md
```js
export default {
  data() {
    return {
      err: 'error', // [!code error]
      warn: 'warning' // [!code warning]
    }
  }
}
```
````

**Rendered result**

```js
export default {
  data() {
    return {
      err: 'error', // [!code error]
      warn: 'warning' // [!code warning]
    }
  }
}
```

## `code-group` tabs

**Markdown**

````md
::: code-group

```js [config.js]
export default {
  title: 'JS'
}
```

```ts [config.ts]
export default {
  title: 'TS' as const
}
```

:::
````

**Rendered result**

::: code-group

```js [config.js]
export default {
  title: 'JS'
}
```

```ts [config.ts]
export default {
  title: 'TS' as const
}
```

:::

## Importing a code snippet

**Markdown**

```md
<<< ../.vitepress/config.ts{6-11}
```

**Rendered result**

<<< ../.vitepress/config.ts{6-11}

## Code block without a language

**Markdown**

````md
```
multiline text
without syntax highlighting
```
````

**Rendered result**

```
multiline text
without syntax highlighting
```

## Line numbers

**Markdown**

````md
```ts:line-numbers=2
const second = 2
const third = 3
```
````

**Rendered result**

```ts:line-numbers=2
const second = 2
const third = 3
```

## Raw HTML with `raw`

**Markdown**

````md
::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML block inside Markdown.
</div>
:::
````

**Rendered result**

::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML block inside Markdown.
</div>
:::

## Math

Math is currently disabled in this project. The syntax below can be enabled with `markdown: { math: true }` and `markdown-it-mathjax3`.

**Markdown**

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$.
```

**Rendered result**

Math is not rendered in this project yet because `math` is not enabled in the config.
