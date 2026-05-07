---
title: Docs
search: false
---

<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

# Docs

This site uses **Markdown**; each `.md` file becomes a page. A **full Markdown + VitePress syntax reference** (with live examples) is maintained on **[Docs (Russian)](/ru/docs)**.

- [VitePress Markdown](https://vitepress.dev/guide/markdown)
- [Basic Markdown syntax](https://www.markdownguide.org/basic-syntax/)

[[toc]]

## Editing pages in Pages CMS

[Pages CMS](https://pagescms.org/) ([app.pagescms.org](https://app.pagescms.org/)) edits text in the UI and commits changes to **GitHub** with the same account you use for the repo.

### Steps (in order)

1. Open the admin UI at **`/bixbit.docs/admin/`** (deployed site: `https://<your-host>/bixbit.docs/admin/`; local dev often `http://localhost:5173/bixbit.docs/admin/` — port may differ).
2. Select the **`bixbit.docs`** repository.
3. Pick a branch for saves, typically **`cms-edits`**. **Do not** commit straight to **`main`** — merge there only after review.
4. Under **Content**, open **Documentation EN** or **Документация RU**.
5. Create folders/pages as needed, then press **Create PR to main** when you are done batching edits.

In short: **`cms-edits`** is the **draft** branch; **`main`** is **what readers get** once changes are merged and the site rebuilt.

---

### Three fields

| Field | Purpose |
| ----- | ------- |
| **Filename** | File name and part of the URL. No spaces; prefer Latin slug: `how-to-install.md`. |
| **Title** / **Заголовок** | Sidebar and browser tab labels. |
| **Content** / **Содержимое** | Page body — **Editor** or **Source** for raw Markdown. |

---

### Folder (section) vs single page at this level

Use a **folder** for several related pages. Use **Add an entry** without a folder for a single sibling file.

Tree rules match `docs/en/` / `docs/ru/`: **`index.md`** is the landing page for that folder segment; omit it if you only need child pages.

The sidebar mirrors that tree (titles from **`title`** in frontmatter and headings; groups from **`index.md`** and folder naming — generation is driven by **`sidebar.ts`** / `vitepress-sidebar`).

#### Folder workflow

1. **Create a folder**, name it, **Create**.
2. Use the **plus** beside that folder row to add files inside it.
3. Set filename, title, body → **Save**.

#### Landing page **`index.md`**

- Add **`index.md`** when the section URL itself should render content.
- Skip it when the folder is only a grouping with no standalone intro.

If the CMS tree lagged after saving, reload (**F5**).

#### Single page

**Add an entry** at the desired level → same three fields → **Save**.

---

### Why production still shows old content

Saving in Pages CMS commits to **`cms-edits`**; **`main`** does **not** auto-update.

1. Click **Create PR to main** to open/update a GitHub PR.
2. After review (with more edits still on **`cms-edits`** if needed), merge to **`main`**.
3. The deploy workflow publishes the merged content.

Ask your team for repository rules protecting **`main`**.

---

## Frontmatter & Markdown reference

YAML frontmatter (e.g. `title`) lives at the top of each file; it is not rendered as visible body text. Detailed examples (**containers**, **code-groups**, **`[!NOTE]`**, **line highlights**, **`[[toc]]`**, embedded HTML, tables, emoji, math notes, etc.) are on **[`/ru/docs`](/ru/docs)**.

## Vue components in Markdown

Import UI pieces in `<script setup>`, then use them as HTML tags.

`DownloadFileButton` props:

- **`label`** — visible label
- **`href`** — file URL

### With props

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

### Defaults

**Markdown**

```md
<DownloadFileButton />
```

**Result**

<DownloadFileButton />

### Custom label only

**Markdown**

```md
<DownloadFileButton label="Installation guide.pdf" />
```

**Result**

<DownloadFileButton label="Installation guide.pdf" />

## Internal links

Typical anchors after rewrites:

- English home → `[Home](/)`  
  **Result:** [Home](/)

- Russian docs reference → `[Docs (Russian)](/ru/docs)`  
  **Result:** [Docs (Russian)](/ru/docs)
