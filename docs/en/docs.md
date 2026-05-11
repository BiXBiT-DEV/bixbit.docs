---
title: Docs
description: Markdown reference, VitePress extensions, and Pages CMS authoring for the bixbit.docs project.
titleTemplate: ':title — Markdown, VitePress extensions & Pages CMS | Documentation'
search: false
head:
  - - meta
    - name: keywords
      content: documentation, VitePress, Pages CMS, Markdown, bixbit.docs, AMS Docs
  - - meta
    - property: og:title
      content: Docs — Markdown, VitePress extensions & Pages CMS
  - - meta
    - property: og:description
      content: Markdown and VitePress syntax reference and Pages CMS editing workflow.
  - - meta
    - name: twitter:card
      content: summary
---

<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

# Docs

Documentation in this project is written in Markdown. Each `.md` file becomes its own site page via VitePress.

- Official VitePress Markdown guide: [vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown)
- Basic Markdown syntax: [markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax/)

Below we cover Markdown and **VitePress Markdown Extensions**. For each item syntax is shown first, then the outcome. Multiple Markdown files can be composed into one page with VitePress’ include mechanics when needed.

[[toc]]

## Frontmatter, descriptions, and meta tags

Every VitePress `.md` file can start with **YAML frontmatter** between opening `---` lines. Visitors never see those keys as prose—they configure the renderer.

- **`title`** is the terse page heading label (shows up wherever VitePress surfaces the page title, and feeds the **`<title>`** template alongside your locale suffix).
- **`titleTemplate`** only shapes the **`head` `<title>` string** tab chrome. `:title` is replaced with whatever VitePress resolved as the active title (normally your frontmatter **`title`** / first **`#`**). Keep the Markdown `# Docs` concise while stuffing the explanatory clause here. Docs: [**Frontmatter → `titleTemplate`**](https://vitepress.dev/reference/frontmatter-config#titletemplate).
- **`description`** powers page summary copy and downstream meta summaries.
- **`head`** declares extra `<head>` tags for **this route only**. Most entries are **`meta`** (keywords, Open Graph, analytics verification, etc.). The tuple syntax matches [`site.head`](https://vitepress.dev/reference/site-config#head).

**This handbook wires up a `:title`-based `titleTemplate` so the browser tab stretches out while on-page headings stay slim.**

**Template for another page:**

```yaml
---
title: Page title for the tab chrome
titleTemplate: ':title — extra wording that only reaches <title> | Documentation'
description: One or two sentences for SERP/snippet previews.
search: false
head:
  - - meta
    - name: keywords
      content: keyword one, keyword two
  - - meta
    - property: og:title
      content: Social-share headline
  - - meta
    - property: og:description
      content: Supporting copy whenever the URL is pasted into chat apps.
---
```

Add **`meta[property="og:image"]`** once you know the canonical absolute URL of hero art on production. Documentation: [**Frontmatter → `head`**](https://vitepress.dev/reference/frontmatter-config#head).

## Editing and creating pages in Pages CMS

[Pages CMS](https://pagescms.org/) ([app.pagescms.org](https://app.pagescms.org/)) is where you edit text; saved files go to GitHub. Sign-in is through **GitHub** using the **same profile** tied to your repository. If you were invited as a **contributor** (Collaborator or org member with repo access), the usual first step is to **open the invitation link from GitHub’s email** and accept; without this, commits from the editor toward the repo are blocked. Afterwards open [app.pagescms.org](https://app.pagescms.org/) under the same GitHub profile.

### Steps for creating a page in Pages CMS

1. **Open admin:** on the documentation site path **`/bixbit.docs/admin/`** (deploy URL pattern: `https://<your-host>/bixbit.docs/admin/`). Local dev commonly `http://localhost:5173/bixbit.docs/admin/` — the port may vary.
2. In the repo list choose **`bixbit.docs`**.
3. Pick a save branch—usually **`cms-edits`**. **Do not** save straight to **`main`**; that branch is reviewed “released” code and changes reach it via a GitHub Pull Request after review.
4. In **Content**, open **Документация RU** or **Documentation EN**.
5. There are several ways to create pages in Pages CMS:
   1. **Single page at this level** — one page without a new group.
   2. **Section with a landing page** — a section introduction page exists.
   3. **Only sub‑items**, **without** a section landing — subpages without a root article for that section.

### Form when creating a page (what goes where)

| Field | What it affects for readers & URLs |
| ----- | --------------------------------- |
| **Filename** | Name in repo + **portion of browser URL**. No spaces—prefer Latin hyphenated slug: `kak-ustanovit.md`. |
| **Заголовок** / **Title** (depends on locale) | **Sidebar + browser tab captions**. |
| **Содержимое** / **Content** (depends on locale) | **Readable body.** Use rich **Editor** or switch **Source** for raw Markdown. |

### When you need **a foldered section**, and when **just one page**

First decide **the outcome you want** (sidebar block shape + routed URLs), then **choose matching actions in Pages CMS**.

**Needs a folder** — several linked pages inside one conceptual topic/chapter hierarchy.

**A single page is enough** — one file beside peers without a grouping folder.

#### 1. One page at this level — **this is what we want**

**What we want.** **One extra item** beside others—no enclosing section folder.

**How we create it.** Select the CMS tree depth you need (locale root or folder already open). **Add an entry**, fill **Filename**, title/text (**Заголовок** / **Содержимое** on RU, **Title** / **Content** on EN) → **Save**. **Don’t** add a folder.

Sidebar labels follow the illustration below (**`title`** in frontmatter gives names):

```text
Sidebar (diagram)
sidebar:
  ├── … other pages …
  └── kak-ustanovit.md     ← one new article at same depth
```

File path lands as `docs/<locale>/kak-ustanovit.md`.

#### 2. Section with **landing** (`index`) page — **what we want**

**What we want.** A sidebar **group** (topic folder): reader can open a **landing** article at the root of the branch, listing subpages (nested folders optionally).

**How we create it.** **Folder-plus** → **Create a folder** → Latin slug/no spaces agree with team → **Create**. Beside the new folder’s row use **plus** → add **`index.md`** (landing prose). Repeat for **`trebovaniya.md`**, optional nested **`zapusk/`** with its **`index.md`** + **`parametri.md`**—same layering pattern onward.

```text
Sidebar (diagram)
sidebar:
  └── ustanovka/
        ├── index.md         ← landing at branch root URL
        ├── trebovaniya.md
        └── zapusk/
              ├── index.md
              └── parametri.md
```

#### 3. Only **nested items**, **no** landing for the branch — **what we want**

**What we want.** Sidebar grouping behaves like an envelope yet **no** dedicated article sits on URL root—only inner docs (possibly foldered).

**How we create it.** Perform **Create a folder** normally but skip root **`index.md`**. Immediately add **`trebovaniya.md`**, optional nested **`zapusk/`** with **`parametri.md`**, etc.

```text
Sidebar (diagram)
sidebar:
  └── ustanovka/
        ├── trebovaniya.md   ← children only, no index.md on ustanovka
        └── zapusk/
              └── parametri.md
```

The **`ustanovka`** root segment may expose no page—children URLs only.

Sidebar labels/order still hinge on **`title`** plus defaults in **`sidebar.ts`** / `vitepress-sidebar`.

---

**Tip.** If sidebar tree didn’t update, reload (**F5**). Respect **indent** when hitting **plus**—new files anchor under whichever row owns that depth.

### After saving—why readers still see “old copy”?

While pressing **Save** in admin commits to draft branch **`cms-edits`**, merges into **`main`** **do not** happen automatically.

**After your editing round**

1. Click **Create PR to main**. GitHub opens/refreshes a merge proposal (**pull request**/PR).
2. Reviewers iterate. Retain **`cms-edits`** as your working branch→issue **Create PR to main** again when needed.
3. When merged on GitHub (**merge**→**`main`**), rebuilt site distributes text to everybody else.


## Vue components embedded in Markdown

VitePress permits embedding Vue widgets inside Markdown: import via `<script setup>`, then tag them like ordinary components.

Built-in showcase component: **`DownloadFileButton`**:

- **`label`** – button caption
- **`href`** – file hyperlink

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

## Custom component without props

Leaving props untouched uses bundled defaults.

**Markdown**

```md
<DownloadFileButton />
```

**Result**

<DownloadFileButton />

## Same component with a different label

Reuse the tag with differing `label` text.

**Markdown**

```md
<DownloadFileButton label="Installation guide.pdf" />
```

**Result**

<DownloadFileButton label="Installation guide.pdf" />

## Table of contents

`[[toc]]` auto-links headings belonging to this Markdown page.

**Markdown**

```md
[[toc]]
```

**Result**

Live sample already occupies the upper region of **this doc page**.

## Headings & anchors {#docs-headings}

Markdown headings auto-assign anchors—you can suffix custom ids.

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

Navigate custom slug **[#custom-anchor-demo](#custom-anchor-demo)**

## Paragraphs

Separate paragraphs via blank spacer line between blocks.

**Markdown**

```md
First paragraph.

Second paragraph.
```

**Result**

First paragraph.

Second paragraph.

## Bold, italics, inline code

**Markdown**

```md
**Bold**
*Italic*
***Bold italic***
~~Strikethrough~~
`inline code`
```

**Result**

**Bold**
*Italic*
***Bold italic***
~~Strikethrough~~
`inline code`

## External hyperlink

**Markdown**

```md
[VitePress Markdown docs](https://vitepress.dev/guide/markdown)
```

**Result**

[VitePress Markdown docs](https://vitepress.dev/guide/markdown)

## Internal link

Markdown internal routes link internal documentation pages together.

**Markdown**

```md
[RU home](/ru/)
```

**Result**

[RU home](/ru/)

Root English URL after rewriting locale `en`:

```md
[Home](/)
```

**Result**

[Home](/)

## Image

**Markdown**

```md
![AMS logo](/images/logo.svg)
```

**Result**

![AMS logo](/images/logo.svg)

## GIF

GIF references mirror static images (`![alt](url)` syntax).

**Markdown**

```md
![GIF demo](/images/demo.gif)
```

**Result**

![GIF demo](https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif)

## Video

For HTML-capable snippets inside Markdown leverage `<video>`. Hosted assets reside under something like **`docs/public/videos`**; `src` is site-relative.

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

### YouTube video

Leverage **`iframe`** with YouTube **`embed`** URL variants.

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
- First bullet
- Second bullet
- Third bullet
```

**Result**

- First bullet
- Second bullet
- Third bullet

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
- [ ] Still todo
```

**Result**

- [x] Done
- [ ] Still todo

## Blockquote

**Markdown**

```md
> Quote text line #1.
>
> Another line stacked within same quote shell.
```

**Result**

> Quote text line #1.
>
> Another line stacked within same quote shell.

## Horizontal rule

Three hyphens occupying their own spacer line denote thematic separators between paragraphs:

**Markdown**

```md
Before boundary paragraph.

---

After boundary paragraph.
```

**Result**

Before boundary paragraph.

---

After boundary paragraph.

## Table

**Markdown**

```md
| Col A | Col B   | Align  |
| ----- | :-----: | -----: |
| text  | center  | right  |
| qty   | 42      | 99     |
```

**Result**

| Col A | Col B   | Align  |
| ----- | :-----: | -----: |
| text  | center  | right  |
| qty   | 42      | 99     |

## Emoji

**Markdown**

```md
:tada: :rocket: :+1:
```

**Result**

:tada: :rocket: :+1:

## `info` block

**Markdown**

```md
::: info
Informational capsule.
:::
```

**Result**

::: info
Informational capsule.
:::

## `tip` block

**Markdown**

```md
::: tip
Supplementary shortcut knowledge.
:::
```

**Result**

::: tip
Supplementary shortcut knowledge.
:::

## `warning` block

**Markdown**

```md
::: warning
Operational caution copy.
:::
```

**Result**

::: warning
Operational caution copy.
:::

## `danger` block

**Markdown**

```md
::: danger
Critical alert style text.
:::
```

**Result**

::: danger
Critical alert style text.
:::

## `details` block

**Markdown**

````md
::: details Toggle label
Masked content here.

```js
console.log('inside details accordion')
```
:::
````

**Result**

::: details Toggle label
Masked content here.

```js
console.log('inside details accordion')
```
:::

## `details` open by default

**Markdown**

````md
::: details Expanded default chunk {open}
```js
console.log('opened by default')
```
:::
````

**Result**

::: details Expanded default chunk {open}
```js
console.log('opened by default')
```
:::

## Danger block titled **STOP**

**Markdown**

```md
::: danger STOP
Do **not** continue without validating checklist.
:::
```

**Result**

::: danger STOP
Do **not** continue without validating checklist.
:::

## GitHub Alert `NOTE`

**Markdown**

```md
> [!NOTE]
> Notes land here succinctly for operators.
```

**Result**

> [!NOTE]
> Notes land here succinctly for operators.

## GitHub Alert `TIP`

**Markdown**

```md
> [!TIP]
> Quick-win guidance lives nearby.
```

**Result**

> [!TIP]
> Quick-win guidance lives nearby.

## GitHub Alert `IMPORTANT`

**Markdown**

```md
> [!IMPORTANT]
> Compliance-level attention required.
```

**Result**

> [!IMPORTANT]
> Compliance-level attention required.

## GitHub Alert `WARNING`

**Markdown**

```md
> [!WARNING]
> Describes operational risk exposures.
```

**Result**

> [!WARNING]
> Describes operational risk exposures.

## GitHub Alert `CAUTION`

**Markdown**

```md
> [!CAUTION]
> Describes negative downstream outcomes.
```

**Result**

> [!CAUTION]
> Describes negative downstream outcomes.

## Highlighted fenced code

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

## Line emphasis inside fenced code

**Markdown**

````md
```ts {2,4}
const ignored = 1
const spotlight = 2
const skip = 3
const another = 4
```
````

**Result**

```ts {2,4}
const ignored = 1
const spotlight = 2
const skip = 3
const another = 4
```

## Comment-driven spotlight

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'highlighted-token' // [!code highlight]
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
      msg: 'highlighted-token' // [!code highlight]
    }
  }
}
```

## Focus line highlight

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'focus-line-demo' // [!code focus]
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
      msg: 'focus-line-demo' // [!code focus]
    }
  }
}
```

## Diff markers inside fenced code

**Markdown**

````md
```js
export default {
  data() {
    return {
      oldChunk: 'deleted' // [!code --]
      newChunk: 'inserted' // [!code ++]
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
      oldChunk: 'deleted' // [!code --]
      newChunk: 'inserted' // [!code ++]
    }
  }
}
```

## `warning`/`error` line annotations inside code

**Markdown**

````md
```js
export default {
  data() {
    return {
      err: 'fatal', // [!code error]
      warn: 'heads-up copy', // [!code warning]
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
      warn: 'heads-up copy', // [!code warning]
    }
  }
}
```

## Tabbed **`code-group`**

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

## Snippet import operator

**Markdown**

```md
<<< ../.vitepress/config.ts{6-11}
```

**Result**

<<< ../.vitepress/config.ts{6-11}

## Plain fenced code (no linguist hints)

**Markdown**

````md
```
Multi-line plaintext
without syntax tagging
```
````

**Result**

```
Multi-line plaintext
without syntax tagging
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

## Raw HTML via **`raw`** wrapper

**Markdown**

````md
::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML escapes Markdown constraints here.
</div>
:::
````

**Result**

::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML escapes Markdown constraints here.
</div>
:::

## Math

Math rendering stays disabled globally. Syntax preview if you someday enable **`markdown: { math: true }`** with **`markdown-it-mathjax3`**:

**Markdown**

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$.
```

**Result**

This project still suppresses formulae—the flag remains off inside `defineConfig`.
