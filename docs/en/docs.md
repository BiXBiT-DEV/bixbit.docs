---
title: Docs
search: false
---

<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

# Docs

Documentation in this project is written in Markdown. Each `.md` file becomes its own site page via VitePress.

- Official VitePress Markdown guide: [vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown)
- Basic Markdown syntax: [markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax/)

Below we cover Markdown and **VitePress Markdown Extensions**. For each item we first show syntax, then the rendered outcome. Multiple Markdown files can be composed into one page with VitePress’ include/snippet helpers when needed.

[[toc]]

## Editing and creating pages in Pages CMS

[Pages CMS](https://pagescms.org/) ([app.pagescms.org](https://app.pagescms.org/)) is where you edit text; saved files land in GitHub. Sign-in happens through **GitHub** with the **same identity** attached to your repository. When you’ve been invited as a **contributor** (repo collaborator or org member with repo access), the usual first step is to **open your GitHub email** and accept the invite; commits from the editor toward the repo will not succeed until access is settled. Afterwards open [app.pagescms.org](https://app.pagescms.org/) signed in with that GitHub account.

### Always follow these steps first

1. **Open admin UI:** document site path **`/bixbit.docs/admin/`** (deployed URL pattern: `https://<your-host>/bixbit.docs/admin/`). Local dev commonly `http://localhost:5173/bixbit.docs/admin/` — the port might differ.
2. In the repo list pick **`bixbit.docs`**.
3. Select the branch to save onto, commonly **`cms-edits`**. **Do not** land edits directly on **`main`** — that branch is reviewed “released” branch; merges happen after review via a GitHub Pull Request.
4. In **Content**, open the locale you edit: **Документация RU** or **Documentation EN** (**Title** / **Content** labels on EN collections).
5. Only then create a folder/page (below). Batch your edits → **Create PR to main** (see the workflow section).

**Shortcut:** **`cms-edits`** = **draft**, **`main`** = **reads for everyone**, after merge on GitHub.

---

### Three form fields

| Field | What it means for URLs and UX |
| ----- | -------------------------------- |
| **Filename** | Stored path + **portion of browser URL**. No spaces—prefer Latin hyphenated slugs (`how-to-install.md`). |
| **Title / Заголовок** (label depends on collection) | **Sidebar + tab captions**. |
| **Content / Содержимое** | **Visible body.** Use rich **Editor** or switch **Source** for raw Markdown. |

---

### When to use **folder vs single page**

Decide **the outcome** (sidebar silhouette + routed URLs), then mirror it in Pages CMS actions.

Folders help **clusters** of sibling pages beneath one conceptual topic—one page is enough when you avoid creating a grouping.

#### 1. One page here — **desired layout**

**What we want.** A **new lone page** sibling to existing sidebar nodes—no enclosing section folder.

**How we create it.** On the CMS tree wherever you intend the page (locale root already opened vs nested folder row) tap **Add an entry**, populate **Filename**, **Title** / **Заголовок**, **Content / Содержимое** → **Save**. **Do not** create a folder.

Readers see captions similar to:

```text
Sidebar (diagram)
sidebar:
  ├── … other sibling pages …
  └── kak-ustanovit.md     ← lone page appended at same depth
```

The repository path becomes `docs/<locale>/kak-ustanovit.md`.

#### 2. Section with **landing** (`index`) page — **desired layout**

**What we want.** A **collapsible group** showing an **introductory** article plus descendants (and optionally nested folders).

**How we create it.** **Folder-plus icon → Create a folder** → latin slug (`ustanovka` or similar) → **Create**. On that folder row, **plus →** add **`index.md`** (landing copy). Add **`trebovaniya.md`**, optionally nested **`zapusk/`**, again maybe its own **`index.md`** + **`parametri.md`**—reuse the same layering pattern indefinitely.

```text
Sidebar (diagram)
sidebar:
  └── ustanovka/
        ├── index.md         ← landing at section root
        ├── trebovaniya.md
        └── zapusk/
              ├── index.md
              └── parametri.md
```

#### 3. Only **child pages**, **no** root article — **desired layout**

**What we want.** **Sidebar grouping** without a dedicated article on the section’s own URL—only inner pages (and maybe subfolders).

**How we create it.** **Create a folder** as usual but **skip** root **`index.md`**. Immediately add **`trebovaniya.md`**, optional nested **`zapusk/`** with **`parametri.md`**, etc.

```text
Sidebar (diagram)
sidebar:
  └── ustanovka/
        ├── trebovaniya.md   ← children only, no index.md on ustanovka
        └── zapusk/
              └── parametri.md
```

The `ustanovka` root URL may not render a page—only child routes remain.

Sidebar labels + ordering still come from **`title`** in frontmatter plus defaults in **`sidebar.ts`** / `vitepress-sidebar`.

---

**Tip.** If the tree did not refresh, reload (**F5**). When hitting **plus**, match the **indent** so new files land under the correct parent row.

### After saving: why production still shows old copy

While you only **Save** in admin, drafts live on **`cms-edits`**—the **`main`** branch **does not** auto-advance.

**After editing**

1. Click **Create PR to main**. GitHub opens/updates merge proposal into **`main`** (abbreviated PR).
2. Reviewers iterate. More edits→still **`cms-edits`**, rerun **Create PR to main**.
3. Approve **`merge`** on GitHub→deploy rebuild→readers consume merged content.

For review policy/`main` protection see your repo settings or team playbook.


## Frontmatter

Frontmatter is the YAML head of each Markdown file—it controls sidebar titles, descriptions, layouts, etc., but **never** renders as visible body prose.

**Markdown**

```yaml
---
title: Docs
description: Sample documentation metadata
---
```

**Result**

The block configures the page silently.

## Vue components embedded in Markdown

VitePress allows importing custom Vue widgets inside Markdown: wrap them with `<script setup>` imports then drop tags inline.

Example project widget: `DownloadFileButton`.

- **`label`** – button caption
- **`href`** – file URL

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

**Result**

<DownloadFileButton
  label="User manual.pdf"
  href="/files/user-manual.pdf"
/>

## Custom component defaults

Skipping props restores component defaults.

**Markdown**

```md
<DownloadFileButton />
```

**Result**

<DownloadFileButton />

## Custom component with another label

Reuse the same Vue tag with differing `label` text.

**Markdown**

```md
<DownloadFileButton label="Installation guide.pdf" />
```

**Result**

<DownloadFileButton label="Installation guide.pdf" />

## Table of contents

`[[toc]]` auto-assembles headings for this page.

**Markdown**

```md
[[toc]]
```

**Result**

See the TOC near the top of this page—that’s `[[toc]]` live.

## Headings & anchors {#docs-headings}

Headings auto-anchor; custom ids use `{#id}` syntax after title text.

**Markdown**

```md
## Level-two heading
### Level-three heading
### Custom slug {#custom-anchor-demo}
```

**Result**

## Level-two heading
### Level-three heading
### Custom slug {#custom-anchor-demo}

Link to custom slug: [#custom-anchor-demo](#custom-anchor-demo)

## Paragraphs

Separate paragraphs with a blank spacer line.

**Markdown**

```md
First paragraph.

Second paragraph.
```

**Result**

First paragraph.

Second paragraph.

## Bold, italics & inline code

**Markdown**

```md
**Bold**
*Italic*
***Bold italic***
~~Strike~~
`inline code`
```

**Result**

**Bold**
*Italic*
***Bold italic***
~~Strike~~
`inline code`

## External hyperlink

**Markdown**

```md
[VitePress Markdown docs](https://vitepress.dev/guide/markdown)
```

**Result**

[VitePress Markdown docs](https://vitepress.dev/guide/markdown)

## Internal link

Markdown links traverse other shipped routes.

**Markdown**

```md
[Home](/)
```

**Result**

[Home](/)

Russian variant for parity:

```md
[Russian Docs](/ru/docs)
```

[Russian Docs](/ru/docs)

## Image

**Markdown**

```md
![AMS logo](/images/logo.svg)
```

**Result**

![AMS logo](/images/logo.svg)

## GIF

GIF behaves like static images—reference file or remote URL.

**Markdown**

```md
![GIF sample](/images/demo.gif)
```

**Result**

![GIF sample](https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif)

## Video

Prefer native `<video>` tags for uploads under `docs/public/videos`; `src` is site-root-relative.

**Markdown**

```html
<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Your browser does not support embedded video.
</video>
```

**Result**

<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Your browser does not support embedded video.
</video>

### YouTube iframe

Paste the **embed** host URL inside `iframe`.

**Markdown**

```html
<iframe
  width="720"
  height="405"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

**Result**

<iframe
  width="720"
  height="405"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## Bullet list

**Markdown**

```md
- First item
- Second item
- Third item
```

**Result**

- First item
- Second item
- Third item

## Ordered list

**Markdown**

```md
1. First step
2. Second step
3. Third step
```

**Result**

1. First step
2. Second step
3. Third step

## Task list

**Markdown**

```md
- [x] Done
- [ ] Still TODO
```

**Result**

- [x] Done
- [ ] Still TODO

## Blockquote

**Markdown**

```md
> Sample quote line.
>
> Another line in the same quote.
```

**Result**

> Sample quote line.
>
> Another line in the same quote.

## Horizontal rule

Three hyphens on their own line render a thematic separator between paragraphs:

**Markdown**

```md
Paragraph before rule.

---

Paragraph after rule.
```

**Result**

Paragraph before rule.

---

Paragraph after rule.

## Table

**Markdown**

```md
| Column A | Column B | Alignment |
| -------- | :------: | --------: |
| text     |  center  |    right |
| number   |    42    |       99 |
```

**Result**

| Column A | Column B | Alignment |
| -------- | :------: | --------: |
| text     |  center  |    right |
| number   |    42    |       99 |

## Emoji

**Markdown**

```md
:tada: :rocket: :+1:
```

**Result**

:tada: :rocket: :+1:

## `info` container

**Markdown**

```md
::: info
Informational container.
:::
```

**Result**

::: info
Informational container.
:::

## `tip` container

**Markdown**

```md
::: tip
Helpful tip copy.
:::
```

**Result**

::: tip
Helpful tip copy.
:::

## `warning` container

**Markdown**

```md
::: warning
Important warning.
:::
```

**Result**

::: warning
Important warning.
:::

## `danger` container

**Markdown**

```md
::: danger
Critical warning body.
:::
```

**Result**

::: danger
Critical warning body.
:::

## `details` accordion

**Markdown**

````md
::: details Expand me
Hidden copy.

```js
console.log('inside details')
```
:::
````

**Result**

::: details Expand me
Hidden copy.

```js
console.log('inside details')
```
:::

## Default-open `details`

**Markdown**

````md
::: details Expanded by default {open}
```js
console.log('opened by default')
```
:::
````

**Result**

::: details Expanded by default {open}
```js
console.log('opened by default')
```
:::

## Container with custom title

**Markdown**

```md
::: danger STOP
Do not continue without verifying.
:::
```

**Result**

::: danger STOP
Do not continue without verifying.
:::

## GitHub alert `NOTE`

**Markdown**

```md
> [!NOTE]
> Handy reminders live here.
```

**Result**

> [!NOTE]
> Handy reminders live here.

## GitHub alert `TIP`

**Markdown**

```md
> [!TIP]
> Share quick wins with readers.
```

**Result**

> [!TIP]
> Share quick wins with readers.

## GitHub alert `IMPORTANT`

**Markdown**

```md
> [!IMPORTANT]
> Must-know compliance details belong here.
```

**Result**

> [!IMPORTANT]
> Must-know compliance details belong here.

## GitHub alert `WARNING`

**Markdown**

```md
> [!WARNING]
> Call out risky operations.
```

**Result**

> [!WARNING]
> Call out risky operations.

## GitHub alert `CAUTION`

**Markdown**

```md
> [!CAUTION]
> Describe undesirable outcomes.
```

**Result**

> [!CAUTION]
> Describe undesirable outcomes.

## Fenced code with language

**Markdown**

````md
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```
````

**Result**

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```

## Line highlighting

**Markdown**

````md
```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```
````

**Result**

```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```

## Comment-driven highlight

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

**Result**

```js
export default {
  data() {
    return {
      msg: 'highlighted' // [!code highlight]
    }
  }
}
```

## Focused line emphasis

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

**Result**

```js
export default {
  data() {
    return {
      msg: 'focused' // [!code focus]
    }
  }
}
```

## Diff markup inside code

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

**Result**

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

## `warning` / `error` line annotations

**Markdown**

````md
```js
export default {
  data() {
    return {
      err: 'fatal', // [!code error]
      warn: 'Heads-up', // [!code warning]
    }
  }
}
```
````

**Result**

```js
export default {
  data() {
    return {
      err: 'fatal', // [!code error]
      warn: 'Heads-up', // [!code warning]
    }
  }
}
```

## Tabbed `code-group`

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

**Result**

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

## Snippet includes

**Markdown**

```md
<<< ../.vitepress/config.ts{6-11}
```

**Result**

<<< ../.vitepress/config.ts{6-11}

## Plain fenced block

**Markdown**

````md
```
Multi-line plaintext
without language hint
```
````

**Result**

```
Multi-line plaintext
without language hint
```

## Line numbering

**Markdown**

````md
```ts:line-numbers=2
const second = 2
const third = 3
```
````

**Result**

```ts:line-numbers=2
const second = 2
const third = 3
```

## Raw HTML snippet

**Markdown**

````md
::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML lives inside Markdown.
</div>
:::
````

**Result**

::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML lives inside Markdown.
</div>
:::

## Math

Expressions stay disabled unless you toggle `markdown: { math: true }` plus `markdown-it-mathjax3`. Syntax preview:

**Markdown**

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$.
```

**Result**

This project skips math rendering because `math` remains off inside `defineConfig`.
