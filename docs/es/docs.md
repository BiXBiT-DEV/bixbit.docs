---
title: Documentación
search: false
---

<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

# Documentación

Las páginas de documentación de este proyecto se escriben en Markdown. VitePress convierte cada archivo `.md` en una página independiente del sitio.

- Documentación oficial de VitePress sobre Markdown: [vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown)
- Sintaxis básica de Markdown: [markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax/)

A continuación se recogen las principales variantes de Markdown y de las VitePress Markdown Extensions. Para cada punto se muestra primero la sintaxis y después el resultado. Si es necesario, una misma página puede componerse a partir de varios archivos Markdown mediante el mecanismo include de VitePress.

[[toc]]

## **Edición de páginas mediante PageCMS**

[PageCMS](https://pagescms.org/) ([app.pagescms.org](https://app.pagescms.org/)) es un sitio donde usted edita el texto y los archivos guardados se envían al repositorio de GitHub. Puede iniciar sesión con la misma cuenta de **GitHub** que utiliza para el proyecto.

### Siempre en este orden

1. **Abra el panel de administración:** en el sitio de documentación, la ruta es **`/site.ams.docs/admin/`** (forma completa: `https://<dirección>/<ruta-al-sitio>/site.ams.docs/admin/`). En su propio equipo, durante el desarrollo, a veces será `http://localhost:5173/site.ams.docs/admin/`; el número de puerto puede variar.
2. En la lista de proyectos, seleccione **site.ams.docs**.
3. Seleccione la **rama** para guardar los cambios, normalmente **`cms-edits`**. **No** guarde los cambios en **`main`**: es la rama de la versión «final» ya aprobada; los cambios llegan a ella a través de GitHub después de la revisión.
4. A la izquierda, en **Content**, abra el idioma deseado: **Документация RU** o **Documentation EN** (en EN, los campos son **Title** / **Content**).
5. Solo después de esto cree la carpeta o la página (ver más abajo). Cuando termine una serie de cambios, haga clic en **Create PR to main** (sección al final de estas instrucciones).

**En pocas palabras:** la rama **`cms-edits`** es el **borrador**; **`main`** es **lo que leen todos**, una vez que los cambios se aceptan y se fusionan en GitHub.

---

### Los tres campos del formulario (qué escribir en cada uno)

| Campo | Qué significa para el lector y para el enlace |
| ---- | ---------------------------------- |
| **Filename** | Cómo se llama el archivo en el proyecto y **parte de la dirección** en el navegador. Sin espacios; preferiblemente en caracteres latinos, con las palabras separadas por guiones: `kak-ustanovit.md`. |
| **Заголовок** / **Title** (puede llamarse de otra forma según el idioma) | Cómo aparece rotulada la página **en las listas y en la pestaña**. |
| **Содержимое** / **Content** (puede llamarse de otra forma según el idioma) | **El propio texto** que las personas leen en la página. Puede escribirlo en **Editor** o **cambiar** a **Source** si necesita Markdown «en bruto». |

---

### Cuándo se necesita una **carpeta con sección** y cuándo **una sola página sin carpeta**

**Se necesita una carpeta** si desea varias páginas relacionadas «dentro de un mismo tema» (como un libro: «capítulo → subsecciones»).

**Basta con una sola página** si necesita un único archivo junto a los demás, sin crear un grupo nuevo.

```text
Пример: одна страница (Add an entry — без новой папки)
docs/ru/
  ├── …другие страницы…
  └── kak-ustanovit.md     ← один файл на текущем уровне

Пример А: раздел С вводной страницей (есть index.md у папки)
docs/ru/
  └── ustanovka/
        ├── index.md         ← текст по основному адресу раздела
        ├── trebovaniya.md
        └── zapusk/
              ├── index.md
              └── parametri.md

Пример Б: раздел БЕЗ вводной (нет index.md только у этого уровня)
docs/ru/
  └── ustanovka/
        ├── trebovaniya.md   ← только «дочерние» страницы
        └── zapusk/
              └── parametri.md
```

Los lectores pueden ver las entradas del **menú lateral** del sitio **aproximadamente así** (los rótulos se toman del campo **`title`** del frontmatter y de los encabezados; para un grupo, de **`index.md`** o del nombre de la carpeta y de las reglas de generación de la barra lateral en **`sidebar.ts`** / `vitepress-sidebar`):

```text
Боковое меню (схема)
———————————————
 … другие пункты …

• Как установить              ← одиночная страница на уровне docs/ru
                              (название из title у kak-ustanovit.md)

▼ Установка                   ← группа = папка ustanovka/
   Вступление / обзор         ← есть только если в папке лежит index.md
                               (или клик только раскрывает список, без своей страницы)
   Требования                 ← trebovaniya.md
   ▼ Запуск                   ← вложенная папка zapusk/
      … вводная из index.md или только подпункты ↓
      Параметры               ← parametri.md
```

Los símbolos **▼ / ►** aquí simplemente indican un grupo expandido y uno contraído; el aspecto exacto (iconos, si está contraído por defecto o no) lo determinan el tema y **`collapseDepth`** en la configuración de la barra lateral.

#### Carpeta: paso a paso

1. Haga clic en el icono de **carpeta con signo más** → en el menú, **Create a folder** → introduzca el nombre de la sección → **Create**.
2. Para añadir un archivo **dentro de este grupo**: haga clic en el **signo más** a la derecha **de la fila de esa carpeta** (no en el del nodo superior de toda la lista, si desea anidarlo precisamente aquí; fíjese en la sangría del árbol).
3. En el formulario, indique el nombre del archivo, el título y el texto → **Save**.

**¿Se necesita una página de introducción de la sección (`index.md`)?**

- **Sí**, si desea que haya texto **en la dirección de la propia sección** al abrirla (un resumen, «empiece por aquí»): el archivo es **`index.md`**, con el texto en el contenido.
- **No es obligatoria** si basta con **una entrada como la de una lista desplegable**: en la carpeta solo hay `trebovaniya.md`, `zapusk/…`, etc., **sin** `index.md`. En el menú, la sección normalmente **se contrae/expande**, pero no existe **un artículo «raíz» propio**; en la URL `…/ustanovka/` puede no haber ninguna página.
- **Una página normal dentro de la sección**: cualquier nombre **`lo‑que‑sea.md`**; no la confunda con `index.md`, salvo que quiera convertirla en la página principal de la carpeta.

**Si el árbol de la izquierda no muestra el elemento nuevo de inmediato**, actualice la página (**F5**); a veces el editor se comporta así.

---

#### Una sola página sin carpeta nueva

Haga clic en **Add an entry**, rellene los mismos tres campos y pulse **Save**. El archivo aparecerá en el nivel actual de la lista, sin carpeta nueva.

---

### Cuando ya está todo guardado: por qué en el sitio público el texto «sigue siendo el antiguo»

Mientras solo pulse **Save** en el panel de administración, los cambios permanecen en la rama de borrador (por ejemplo, **`cms-edits`**). **No pasan solos** a **`main`**.

**Qué hacer después de completar los cambios**

1. A la izquierda, haga clic en **Create PR to main**. En GitHub se creará o actualizará una solicitud: «propongo fusionar el borrador en **`main`**» (se denomina **pull request**, abreviado PR).
2. Sus compañeros revisan la solicitud. Si hacen falta correcciones, vuelva a editar en el panel de administración (rama **`cms-edits`**) y haga clic de nuevo en **Create PR to main**.
3. Cuando todo esté correcto, en GitHub se hace **merge** en **`main`**; tras la compilación del sitio, el texto quedará disponible para todos los lectores.

Encontrará más información sobre las ramas y la protección de **`main`** en **`CONTRIBUTING.md`**, en la raíz del repositorio.

## Frontmatter

El frontmatter se encuentra al principio del archivo y controla los metadatos de la página: el título, la descripción, el sidebar title y otros parámetros. Este bloque no se muestra en el cuerpo de la página.

**Markdown**

```yaml
---
title: Docs
description: Пример страницы документации
---
```

**Resultado**

Este bloque afecta a la página, pero no se renderiza como contenido visible.

## SEO

Al crear o editar una página, rellene los campos SEO en PageCMS:

- **Заголовок** (título): nombre breve y preciso de la página (en el menú y en la propia página).
- **SEO-заголовок** (título SEO): título de la pestaña del navegador y de los resultados de búsqueda. Si el campo está vacío, se utiliza **Заголовок**.
- **SEO-описание** (descripción SEO): describa de forma única el contenido de la página para los resultados de búsqueda. La longitud recomendada es de hasta 160 caracteres.
- **Изображение для предпросмотра** (imagen de vista previa): URL completa de la imagen para la tarjeta del enlace, por ejemplo `https://docs.bixbit.io/images/dns-settings.png`. El campo es opcional.

En el modo **Source**, estos datos se almacenan en el frontmatter:

```yaml
---
title: Настройка DNS на ASIC-майнере
seoTitle: Настройка DNS на ASIC-майнере | BiXBiT Docs
description: Как настроить DNS на ASIC-майнере с прошивкой BiXBiT.
ogImage: https://docs.bixbit.io/images/dns-settings.png
---
```

El sitio añade automáticamente la URL canónica, el título y el idioma para la vista previa del enlace, e incluye las páginas en `sitemap.xml`. No es necesario añadir estas etiquetas técnicas manualmente. Rellene la descripción SEO por separado para cada versión de idioma.

### Texto alternativo de las imágenes

En Source, indique la descripción de la imagen entre corchetes:

```md
![Поле DNS с адресом сервера в настройках сети майнера](/images/dns-settings.png)
```

Describa qué se muestra exactamente y qué información transmite la imagen. Para las imágenes decorativas, deje los corchetes vacíos: `![](/images/decorative-line.png)`.

## Componentes Vue personalizados en Markdown

En VitePress se pueden utilizar componentes Vue propios directamente dentro de una página `.md`. Para ello, el componente debe importarse en el bloque `<script setup>` y, a continuación, insertarse como una etiqueta normal.

Este proyecto incluye el componente `DownloadFileButton`. Admite las siguientes props:

- `label` - texto del botón
- `href` - enlace al archivo

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

**Resultado**

<DownloadFileButton
  label="User manual.pdf"
  href="/files/user-manual.pdf"
/>

## Componente personalizado sin props

Si no se pasan props, el componente utiliza sus valores predeterminados.

**Markdown**

```md
<DownloadFileButton />
```

**Resultado**

<DownloadFileButton />

## Componente personalizado con otro texto

Así se puede reutilizar el mismo componente con otro `label`.

**Markdown**

```md
<DownloadFileButton label="Инструкция по установке.pdf" />
```

**Resultado**

<DownloadFileButton label="Instrucciones de instalación.pdf" />

## Tabla de contenidos

`[[toc]]` genera automáticamente una tabla de contenidos a partir de los encabezados de la página.

**Markdown**

```md
[[toc]]
```

**Resultado**

Ya hay un ejemplo real insertado en la parte superior de esta página.

## Encabezados y anclas {#docs-headings}

Los encabezados generan anclas automáticamente. También se puede definir un `id` propio.

**Markdown**

```md
## Раздел второго уровня
### Раздел третьего уровня
### Кастомный якорь {#custom-anchor-demo}
```

**Resultado**

## Sección de segundo nivel
### Sección de tercer nivel
### Ancla personalizada {#custom-anchor-demo}

Enlace al ancla personalizada: [#custom-anchor-demo](#custom-anchor-demo)

## Párrafos

Un nuevo párrafo comienza después de una línea en blanco.

**Markdown**

```md
Это первый абзац.

Это второй абзац.
```

**Resultado**

Este es el primer párrafo.

Este es el segundo párrafo.

## Resaltado de texto e inline code

**Markdown**

```md
**Жирный текст**
*Курсив*
***Жирный курсив***
~~Зачёркнутый текст~~
`inline code`
```

**Resultado**

**Texto en negrita**
*Cursiva*
***Negrita y cursiva***
~~Texto tachado~~
`inline code`

## Enlace externo

**Markdown**

```md
[Документация VitePress](https://vitepress.dev/guide/markdown)
```

**Resultado**

[Documentación de VitePress](https://vitepress.dev/guide/markdown)

## Enlace interno

Los enlaces internos llevan a otras páginas de la documentación.

**Markdown**

```md
[Главная](/en/)
```

**Resultado**

[Inicio](/en/)

## Imagen

**Markdown**

```md
![Логотип AMS](/images/logo.svg)
```

**Resultado**

![Logotipo de AMS](/images/logo.svg)

## GIF

Un GIF se inserta igual que una imagen normal.

**Markdown**

```md
![Пример GIF](/images/demo.gif)
```

**Resultado**

![Ejemplo de GIF](https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif)

## Vídeo

Para insertar un vídeo en una página Markdown, utilice la etiqueta HTML `<video>`.  
Normalmente, el archivo se coloca en `docs/public/videos` y en `src` se indica la ruta desde la raíz del sitio.

**Markdown**

```html
<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Ваш браузер не поддерживает встроенное видео.
</video>
```

**Resultado**

<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Su navegador no admite la reproducción de vídeo integrado.
</video>

### Vídeo de YouTube

Para los vídeos de YouTube, utilice un `iframe` con un enlace `embed`.

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

**Resultado**

<iframe
  width="720"
  height="405"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## Lista con viñetas

**Markdown**

```md
- Первый пункт
- Второй пункт
- Третий пункт
```

**Resultado**

- Primer elemento
- Segundo elemento
- Tercer elemento

## Lista numerada

**Markdown**

```md
1. Первый шаг
2. Второй шаг
3. Третий шаг
```

**Resultado**

1. Primer paso
2. Segundo paso
3. Tercer paso

## Lista de verificación

**Markdown**

```md
- [x] Готово
- [ ] Нужно сделать
```

**Resultado**

- [x] Hecho
- [ ] Pendiente

## Cita

**Markdown**

```md
> Это пример цитаты.
>
> Вторая строка в той же цитате.
```

**Resultado**

> Este es un ejemplo de cita.
>
> Segunda línea de la misma cita.

## Separador

**Markdown**

```md
---
```

**Resultado**

---

## Tabla

**Markdown**

```md
| Колонка A | Колонка B | Выравнивание |
| --------- | :-------: | ------------: |
| текст     |  центр    |       вправо |
| число     |    42     |           99 |
```

**Resultado**

| Columna A | Columna B | Alineación |
| --------- | :-------: | ------------: |
| texto     |  centro    |       derecha |
| número     |    42     |           99 |

## Emoji

**Markdown**

```md
:tada: :rocket: :+1:
```

**Resultado**

:tada: :rocket: :+1:

## Bloque `info`

**Markdown**

```md
::: info
Информационный блок.
:::
```

**Resultado**

::: info
Bloque informativo.
:::

## Bloque `tip`

**Markdown**

```md
::: tip
Полезная подсказка.
:::
```

**Resultado**

::: tip
Consejo útil.
:::

## Bloque `warning`

**Markdown**

```md
::: warning
Важное предупреждение.
:::
```

**Resultado**

::: warning
Advertencia importante.
:::

## Bloque `danger`

**Markdown**

```md
::: danger
Критичное предупреждение.
:::
```

**Resultado**

::: danger
Advertencia crítica.
:::

## Bloque `details`

**Markdown**

````md
::: details Нажми, чтобы раскрыть
Скрытый текст.

```js
console.log('inside details')
```
:::
````

**Resultado**

::: details Haga clic para desplegar
Texto oculto.

```js
console.log('inside details')
```
:::

## Bloque `details` abierto por defecto

**Markdown**

````md
::: details Открытый блок {open}
```js
console.log('opened by default')
```
:::
````

**Resultado**

::: details Bloque abierto {open}
```js
console.log('opened by default')
```
:::

## Bloque con título personalizado

**Markdown**

```md
::: danger STOP
Не продолжайте без проверки.
:::
```

**Resultado**

::: danger STOP
No continúe sin verificar.
:::

## GitHub Alert `NOTE`

**Markdown**

```md
> [!NOTE]
> Этот блок полезен для заметок.
```

**Resultado**

> [!NOTE]
> Este bloque es útil para notas.

## GitHub Alert `TIP`

**Markdown**

```md
> [!TIP]
> Этот блок полезен для подсказок.
```

**Resultado**

> [!TIP]
> Este bloque es útil para consejos.

## GitHub Alert `IMPORTANT`

**Markdown**

```md
> [!IMPORTANT]
> Этот блок подчёркивает обязательную информацию.
```

**Resultado**

> [!IMPORTANT]
> Este bloque destaca información obligatoria.

## GitHub Alert `WARNING`

**Markdown**

```md
> [!WARNING]
> Этот блок предупреждает о рисках.
```

**Resultado**

> [!WARNING]
> Este bloque advierte sobre riesgos.

## GitHub Alert `CAUTION`

**Markdown**

```md
> [!CAUTION]
> Этот блок описывает негативные последствия.
```

**Resultado**

> [!CAUTION]
> Este bloque describe consecuencias negativas.

## Bloque de código con resaltado

**Markdown**

````md
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```
````

**Resultado**

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```

## Resaltado de líneas en el código

**Markdown**

````md
```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```
````

**Resultado**

```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```

## Resaltado de una línea mediante comentario

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

**Resultado**

```js
export default {
  data() {
    return {
      msg: 'подсвечено' // [!code highlight]
    }
  }
}
```

## Foco en una línea

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

**Resultado**

```js
export default {
  data() {
    return {
      msg: 'в фокусе' // [!code focus]
    }
  }
}
```

## Líneas diff en el código

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

**Resultado**

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

## Warning y error en líneas de código

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

**Resultado**

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

## Grupo de pestañas `code-group`

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

**Resultado**

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

## Importación de un fragmento de código

**Markdown**

```md
<<< ../.vitepress/config.ts{6-11}
```

**Resultado**

<<< ../.vitepress/config.ts{6-11}

## Bloque de código sin lenguaje

**Markdown**

````md
```
многострочный текст
без подсветки синтаксиса
```
````

**Resultado**

```
многострочный текст
без подсветки синтаксиса
```

## Números de línea

**Markdown**

````md
```ts:line-numbers=2
const second = 2
const third = 3
```
````

**Resultado**

```ts:line-numbers=2
const second = 2
const third = 3
```

## HTML en bruto mediante `raw`

**Markdown**

````md
::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML-блок внутри Markdown.
</div>
:::
````

**Resultado**

::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  Bloque HTML dentro de Markdown.
</div>
:::

## Math

Las fórmulas están desactivadas en el proyecto actual. A continuación se muestra la sintaxis, que puede activarse mediante `markdown: { math: true }` y la instalación de `markdown-it-mathjax3`.

**Markdown**

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$.
```

**Resultado**

En este proyecto las fórmulas todavía no se renderizan, porque `math` no está activado en la configuración.
