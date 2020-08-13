# show-text-interval

## Плагин для показа текста по буквам с определенным интервалом 

![](https://sergey2342.github.io/show-text-interval/gif/hello.gif)

### Пункт 1: Подключение плагина

Скачайте файл `show-text-interval.js` и подключите в конце страницы.

```html
<!-- show-text-interval Javascript file -->
<script src="./show-text-interval.js"></script>
```

### Пункт 2: Добавление тега на страницу

Тег с плагином должен содержать только текст, все остальное при инициализации скрипта будет стерто.

```html
<div class="text-interval">Hello World!!!</div>
```

Так же этот тег должен изначально содержать стиль `opacity: 0;`.

```css
.text-interval {
  opacity: 0;
}
```

### Пункт 3: Инициализация скрипта

Для включения плагина стоит инициализировать функцию `showTextInterval({});`.

```javascript
showTextInterval({});
```

При инициализации не обязательно передавать параметры, по умолчанию установлены три параметра: `selector: '.text-interval', interval: 50, opacity: '1'`.
В параметр `selector` указывается селектор нужного тега, в параметр `interval` указывается интервал показа букв в миллисекундах, в параметр `opacity` значение прозрачности.

#### Использование плагина со своими параметрами

```javascript
showTextInterval({
  selector: 'ваш селектор',
  interval: ваш интервал,
  opacity: '1'
});
```


> Так же, меняя стиль `text-align` можно добиться разный вид появления текста.

![](https://sergey2342.github.io/show-text-interval/gif/hello-center.gif)
