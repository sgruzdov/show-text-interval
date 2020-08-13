## show-text-interval

## Плагин для показа текста по буквам с определенным интервалом 

![] ();

### Пункт 1: Подключение плагина

Скачайте файл `show-text-interval.js` и подключите в конце страницы.

```html
<!-- show-text-interval Javascript file -->
<script src="./show-text-interval.js"></script>
```

### Пункт 2: Добавление тега на страницу

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
