---
title: Docs
search: false
---

<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

# Docs

Страницы документации в этом проекте пишутся в Markdown. Каждый файл `.md` VitePress превращает в отдельную страницу сайта.

- Официальная документация VitePress по Markdown: [vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown)
- Базовый синтаксис Markdown: [markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax/)

Ниже собраны основные варианты Markdown и VitePress Markdown Extensions. Для каждого пункта сначала показан синтаксис, затем результат. При необходимости одну страницу можно собирать из нескольких Markdown-файлов через include-механику VitePress.

[[toc]]

## Редактирование и создание страниц через Pages CMS

[Pages CMS](https://pagescms.org/) ([app.pagescms.org](https://app.pagescms.org/)) — это сайт, где вы правите текст, а сохранённые файлы уезжают в репозиторий на GitHub. Авторизация идёт через **GitHub** (тот же профиль, что и у репозитория). Если вас добавили как **contributor** (Collaborator или участник организации с доступом к репо), типичный первый шаг — **перейти по ссылке в письме от GitHub** и принять приглашение; без этого сохранённые из редактора коммиты в репозиторий недоступны. После принятия снова откройте [app.pagescms.org](https://app.pagescms.org/) под тем же GitHub-профилём.

### Шаги для создания страницы в Pages CMS
1. **Откройте админку:** на сайте с документацией путь **`/bixbit.docs/admin/`** (пример деплоя: `https://<ваш-хост>/bixbit.docs/admin/`). Локально при разработке: `http://localhost:5173/bixbit.docs/admin/` — номер порта может отличаться.
2. В списке проектов выберите репозиторий **`bixbit.docs`**.
3. Выберите **ветку** для сохранений, обычно **`cms-edits`**. **Не** сохраняйте правки в **`main`** — это ветка уже согласованной «готовой» версии; туда они попадают через Pull Request в GitHub после проверки.
4. Слева в **Content** откройте нужный язык: **Документация RU** или **Documentation EN** 


5. Есть несколько вариантов создания страницы в Pages CMS:
  1. **Одна страница на этом уровне** — если нужна одна страница на текущем уровне без новой группы.
  2. **Раздел со вводной страницей** — если нужна вводная страница для раздела.
  3. **Только подпункты**, **без** вводной у раздела — если нужно только подпункты без вводной страницы.

### При создании страницы есть форма (что куда писать)

| Поле | Что это для читателя и для ссылки |
| ---- | ---------------------------------- |
| **Filename** | Как файл называется в проекте и **часть адреса** в браузере. Без пробелов; лучше латиницей, слова через дефис: `kak-ustanovit.md`. |
| **Заголовок** / **Title** (может называться иначе смотря какой язык) | Как страница подписана **в списках и во вкладке**. |
| **Содержимое** / **Content** (может называться иначе смотря какой язык) | **Сам текст**, который люди читают на странице. Можно набрать в **Editor** или **переключитесь** в **Source**, если нужен «сырой» Markdown. |

### Когда нужна **папка с разделом**, а когда **одна страница без папки**

Сначала решите **какой результат хотите** (как будет выглядеть блок в боковом меню и что откроется по URL), затем **сделайте соответствующие действия в Pages CMS**.

**Нужна папка** — если хотите несколько связанных страниц «внутри одной темы» (как глава с подразделами).

**Хватит одной страницы** — если нужен один файл на текущем уровне без новой группы.

#### 1. Одна страница на этом уровне — **хотим** так

**Что хотим.** В меню просто добавляется **ещё один пункт** рядом с остальными, без обёртки‑раздела.

**Как создаём.** На нужном уровне дерева (коллекция локали или уже открытая папка) нажмите **Add an entry**, заполните **Filename** и название с текстом (**Заголовок** / **Содержимое** в коллекции RU, **Title** / **Content** в EN) → **Save**. Папку **не** создаём.

Подписи пунктов сайдбара читатель видит как в этом примере (имена страниц берутся из поля **`title`**):

```text
Боковое меню (схема)
sidebar:
  ├── … другие страницы …
  └── kak-ustanovit.md     ← одна добавленная статья на том же уровне
```

В репозитории файл оказывается в каталоге локали как `docs/<локаль>/kak-ustanovit.md`.

#### 2. Раздел со **вводной** страницей — **хотим** так

**Что хотим.** В сайдбаре — **группа** (папка темы); по клику на раздел читатель может открыть **вводную** статью, а ниже перечислены подразделы (и при желании свои подпапки).

**Как создаём.** Значок **папки с плюсом** → **Create a folder** → имя раздела (на латинице/без пробелов как договоритесь) → **Create**. У строки новой папки нажмите **плюс** и добавьте **`index.md`** — текст вводной страницы. Затем тем же способом добавьте **`trebovaniya.md`**, при необходимости вложенную папку **`zapusk/`**, внутри неё при необходимости свой **`index.md`** и файл **`parametri.md`** — вложенность по той же схеме.

```text
Боковое меню (схема)
sidebar:
  └── ustanovka/
        ├── index.md         ← ввод по «корню» раздела
        ├── trebovaniya.md
        └── zapusk/
              ├── index.md
              └── parametri.md
```

#### 3. Только **подпункты**, **без** вводной у раздела — **хотим** так

**Что хотим.** Группа в меню нужна как «конверт», но **отдельной статьи** по URL этого раздела не требуется — только страницы внутри (и возможно подпапки).

**Как создаём.** **Create a folder** создаёте как обычно, но файл **`index.md`** в корне этой папки **не** добавляете. Сразу создайте **`trebovaniya.md`**, при необходимости вложенную папку **`zapusk/`** с **`parametri.md`** и т.д.

```text
Боковое меню (схема)
sidebar:
  └── ustanovka/
        ├── trebovaniya.md   ← дочерние страницы, без index.md у ustanovka
        └── zapusk/
              └── parametri.md
```

По адресу «корня» раздела `ustanovka` отдельной страницы может не быть — открытыми остаются только дочерние URL.

Подписи в сайдбаре и порядок по-прежнему зависят от **`title`** в frontmatter и от правил в **`sidebar.ts`** / генератора `vitepress-sidebar`.

---

**Подсказка.** Если элемент не появился в дереве слева — обновите вкладку (**F5**). Следите за **отступами** при нажатии **плюс**: файл должен оказаться именно под той строкой дерева (корень или нужная папка), где вы хотите видеть результат.

### Когда уже всё сохранено: почему на общем сайте текст «ещё старый»

Пока вы только нажимаете **Save** в админке, изменения живут в ветке‑черновике (например **`cms-edits`**). В **`main`** они **сами не переезжают**.

**Что сделать после набора правок**

1. Слева нажмите **Create PR to main**. На GitHub создастся или обновится заявка: «предлагаю влить черновик в **`main`**» (это называют **pull request**, кратко PR).
2. Коллеги проверяют заявку. Если нужны правки — вы снова правите в админке в своей ветке (например ветка **`cms-edits`**), затем снова **Create PR to main**.
3. Когда всё ок — на GitHub нажимают **merge** в **`main`**; после сборки сайта текст станет общим для всех читателей.


## Кастомные компоненты Vue в Markdown

В VitePress можно использовать свои Vue-компоненты прямо внутри `.md`-страницы. Для этого компонент нужно импортировать в блоке `<script setup>`, а затем вставить его как обычный тег.

В этом проекте есть компонент `DownloadFileButton`. Он принимает такие пропсы:

- `label` - текст на кнопке
- `href` - ссылка на файл

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

**Результат**

<DownloadFileButton
  label="User manual.pdf"
  href="/files/user-manual.pdf"
/>

## Кастомный компонент без пропсов

Если пропсы не передавать, компонент использует свои значения по умолчанию.

**Markdown**

```md
<DownloadFileButton />
```

**Результат**

<DownloadFileButton />

## Кастомный компонент с другим текстом

Так можно переиспользовать тот же компонент с другим `label`.

**Markdown**

```md
<DownloadFileButton label="Инструкция по установке.pdf" />
```

**Результат**

<DownloadFileButton label="Инструкция по установке.pdf" />

## Оглавление

`[[toc]]` автоматически строит оглавление по заголовкам на странице.

**Markdown**

```md
[[toc]]
```

**Результат**

Живой пример уже вставлен в верхней части этой страницы.

## Заголовки и якоря {#docs-headings}

У заголовков автоматически создаются якоря. Можно задать и свой собственный `id`.

**Markdown**

```md
## Раздел второго уровня
### Раздел третьего уровня
### Кастомный якорь {#custom-anchor-demo}
```

**Результат**

## Раздел второго уровня
### Раздел третьего уровня
### Кастомный якорь {#custom-anchor-demo}

Ссылка на кастомный якорь: [#custom-anchor-demo](#custom-anchor-demo)

## Параграфы

Новый абзац начинается после пустой строки.

**Markdown**

```md
Это первый абзац.

Это второй абзац.
```

**Результат**

Это первый абзац.

Это второй абзац.

## Выделение текста и inline code

**Markdown**

```md
**Жирный текст**
*Курсив*
***Жирный курсив***
~~Зачёркнутый текст~~
`inline code`
```

**Результат**

**Жирный текст**
*Курсив*
***Жирный курсив***
~~Зачёркнутый текст~~
`inline code`

## Внешняя ссылка

**Markdown**

```md
[Документация VitePress](https://vitepress.dev/guide/markdown)
```

**Результат**

[Документация VitePress](https://vitepress.dev/guide/markdown)

## Внутренняя ссылка

Внутренние ссылки ведут на другие страницы документации.

**Markdown**

```md
[Главная](/ru/)
```

**Результат**

[Главная](/ru/)

Английская главная после rewrites локали `en`:

```md
[Home](/)
```

**Результат**

[Home](/)

## Изображение

**Markdown**

```md
![Логотип AMS](/images/logo.svg)
```

**Результат**

![Логотип AMS](/images/logo.svg)

## GIF

GIF вставляется так же, как обычное изображение.

**Markdown**

```md
![Пример GIF](/images/demo.gif)
```

**Результат**

![Пример GIF](https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif)

## Видео

Для видео в Markdown-странице используй HTML-тег `<video>`.
Обычно файл кладут в `docs/public/videos`, а в `src` указывают путь от корня сайта.

**Markdown**

```html
<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Ваш браузер не поддерживает встроенное видео.
</video>
```

**Результат**

<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Ваш браузер не поддерживает встроенное видео.
</video>

### Видео с YouTube

Для роликов YouTube используй `iframe` с `embed`-ссылкой.

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

**Результат**

<iframe
  width="720"
  height="405"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## Маркированный список

**Markdown**

```md
- Первый пункт
- Второй пункт
- Третий пункт
```

**Результат**

- Первый пункт
- Второй пункт
- Третий пункт

## Нумерованный список

**Markdown**

```md
1. Первый шаг
2. Второй шаг
3. Третий шаг
```

**Результат**

1. Первый шаг
2. Второй шаг
3. Третий шаг

## Чеклист

**Markdown**

```md
- [x] Готово
- [ ] Нужно сделать
```

**Результат**

- [x] Готово
- [ ] Нужно сделать

## Цитата

**Markdown**

```md
> Это пример цитаты.
>
> Вторая строка в той же цитате.
```

**Результат**

> Это пример цитаты.
>
> Вторая строка в той же цитате.

## Разделитель

Три дефиса `---` на отдельной строке задают тематический разделитель между блоками текста:

**Markdown**

```md
Раздел между абзацами.

---

Следующий блок.
```

**Результат**

Раздел между абзацами.

---

Следующий блок.

## Таблица

**Markdown**

```md
| Колонка A | Колонка B | Выравнивание |
| --------- | :-------: | ------------: |
| текст     |  центр    |       вправо |
| число     |    42     |           99 |
```

**Результат**

| Колонка A | Колонка B | Выравнивание |
| --------- | :-------: | ------------: |
| текст     |  центр    |       вправо |
| число     |    42     |           99 |

## Emoji

**Markdown**

```md
:tada: :rocket: :+1:
```

**Результат**

:tada: :rocket: :+1:

## Блок `info`

**Markdown**

```md
::: info
Информационный блок.
:::
```

**Результат**

::: info
Информационный блок.
:::

## Блок `tip`

**Markdown**

```md
::: tip
Полезная подсказка.
:::
```

**Результат**

::: tip
Полезная подсказка.
:::

## Блок `warning`

**Markdown**

```md
::: warning
Важное предупреждение.
:::
```

**Результат**

::: warning
Важное предупреждение.
:::

## Блок `danger`

**Markdown**

```md
::: danger
Критичное предупреждение.
:::
```

**Результат**

::: danger
Критичное предупреждение.
:::

## Блок `details`

**Markdown**

````md
::: details Нажми, чтобы раскрыть
Скрытый текст.

```js
console.log('inside details')
```
:::
````

**Результат**

::: details Нажми, чтобы раскрыть
Скрытый текст.

```js
console.log('inside details')
```
:::

## Блок `details` открытый по умолчанию

**Markdown**

````md
::: details Открытый блок {open}
```js
console.log('opened by default')
```
:::
````

**Результат**

::: details Открытый блок {open}
```js
console.log('opened by default')
```
:::

## Блок с кастомным заголовком

**Markdown**

```md
::: danger STOP
Не продолжайте без проверки.
:::
```

**Результат**

::: danger STOP
Не продолжайте без проверки.
:::

## GitHub Alert `NOTE`

**Markdown**

```md
> [!NOTE]
> Этот блок полезен для заметок.
```

**Результат**

> [!NOTE]
> Этот блок полезен для заметок.

## GitHub Alert `TIP`

**Markdown**

```md
> [!TIP]
> Этот блок полезен для подсказок.
```

**Результат**

> [!TIP]
> Этот блок полезен для подсказок.

## GitHub Alert `IMPORTANT`

**Markdown**

```md
> [!IMPORTANT]
> Этот блок подчёркивает обязательную информацию.
```

**Результат**

> [!IMPORTANT]
> Этот блок подчёркивает обязательную информацию.

## GitHub Alert `WARNING`

**Markdown**

```md
> [!WARNING]
> Этот блок предупреждает о рисках.
```

**Результат**

> [!WARNING]
> Этот блок предупреждает о рисках.

## GitHub Alert `CAUTION`

**Markdown**

```md
> [!CAUTION]
> Этот блок описывает негативные последствия.
```

**Результат**

> [!CAUTION]
> Этот блок описывает негативные последствия.

## Кодовый блок с подсветкой

**Markdown**

````md
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```
````

**Результат**

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```

## Подсветка строк в коде

**Markdown**

````md
```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```
````

**Результат**

```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```

## Подсветка строки через комментарий

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'подсвечено' // [!code highlight]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      msg: 'подсвечено' // [!code highlight]
    }
  }
}
```

## Фокус на строке

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'в фокусе' // [!code focus]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      msg: 'в фокусе' // [!code focus]
    }
  }
}
```

## Diff-строки в коде

**Markdown**

````md
```js
export default {
  data() {
    return {
      old: 'удалено' // [!code --]
      neu: 'добавлено' // [!code ++]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      old: 'удалено' // [!code --]
      neu: 'добавлено' // [!code ++]
    }
  }
}
```

## Warning и error на строках кода

**Markdown**

````md
```js
export default {
  data() {
    return {
      err: 'ошибка', // [!code error]
      warn: 'предупреждение' // [!code warning]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      err: 'ошибка', // [!code error]
      warn: 'предупреждение' // [!code warning]
    }
  }
}
```

## Группа вкладок `code-group`

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

**Результат**

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

## Импорт фрагмента кода

**Markdown**

```md
<<< ../.vitepress/config.ts{6-11}
```

**Результат**

<<< ../.vitepress/config.ts{6-11}

## Кодовый блок без языка

**Markdown**

````md
```
многострочный текст
без подсветки синтаксиса
```
````

**Результат**

```
многострочный текст
без подсветки синтаксиса
```

## Номера строк

**Markdown**

````md
```ts:line-numbers=2
const second = 2
const third = 3
```
````

**Результат**

```ts:line-numbers=2
const second = 2
const third = 3
```

## Сырой HTML через `raw`

**Markdown**

````md
::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML-блок внутри Markdown.
</div>
:::
````

**Результат**

::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML-блок внутри Markdown.
</div>
:::

## Math

Формулы в текущем проекте отключены. Ниже показан синтаксис, который можно включить через `markdown: { math: true }` и установку `markdown-it-mathjax3`.

**Markdown**

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$.
```

**Результат**

В этом проекте формулы пока не рендерятся, потому что `math` не включён в конфиге.
