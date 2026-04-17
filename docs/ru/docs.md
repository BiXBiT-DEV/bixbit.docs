---
title: Docs
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

## Frontmatter

Frontmatter находится в начале файла и управляет метаданными страницы: заголовком, описанием, sidebar title и другими параметрами. В теле страницы этот блок не отображается.

**Markdown**

```yaml
---
title: Docs
description: Пример страницы документации
---
```

**Результат**

Этот блок влияет на страницу, но не рендерится как видимый контент.

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
[UI Kit](./ui-kit.md)
```

**Результат**

[UI Kit](./ui-kit.md)

## Изображение

**Markdown**

```md
![Логотип AMS](/images/logo.svg)
```

**Результат**

![Логотип AMS](/images/logo.svg)

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

**Markdown**

```md
---
```

**Результат**

---

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
