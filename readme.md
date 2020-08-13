## show-text-interval

## Плагин для показа текста по буквам с определенным интервалом 

![](https://sergey2342.github.io/show-text-interval/hello.gif);

### Пункт 1: Подключение плагина

Скачайте файл `show-text-interval.js` и подключите в конце страницы.

```html
<!-- show-text-interval Javascript file -->
<script src="https://sergey2342.github.io/show-text-interval/show-text-interval.js"></script>
```

### Пункт 2: Добавление тега на страницу

Тег с плагином должен содержать один текст, все остальное при инициализации скрипта будет стерто.

```html
<div class="text-interval">Hello World!!!</div>
```

### Пункт 3: Инициализация скрипта

Для включения плагина стоит инициальзировать функцию `showTextInterval({});`.

```javascript
showTextInterval({});
```

При инициализации не обязательно передавать атрибуты, по умолчанию есть 2 параметра: `selector: '.text-interval', interval: 50`.
В параметр `selector` указывается class или id нужного тега, в параметр `interval` указывается интервал показа букв в миллисекундах.

#### Использование планига со своими параметрами

```javascript
showTextInterval({
  selector: 'ваш селектор',
  interval: ваш интервал
});
```
