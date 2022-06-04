Ссылка на проект: https://cusins.github.io/mesto/index.html
### Проектная работа №4: Mesto
---
**Описание**
1. В проекте есть index.html , index.css , README.md, директория blocks со стилями и файлы с картинками в
директории images .
2. В index.css импортирован normalize.css .
3. Верстка внешне соответствует макету в брифе.
4. Нет опечаток в коде HTML и CSS, страница валидна
5. Стили подключены в отдельном файле.
6. Присутствуют все секции из макета.
7. Вёрстка не ломается между брейкпоинтами.
8. Ширина элементов и отступы отличаются от макета не больше, чем на 30px на контрольных точках.
9. Для различных блоков, заголовков, секций и т.д применяются соответствующие теги
10. Все ссылки и интерактивные элементы имеют состояние наведения :hover .
11. Контентные изображения имеют alt с корректным описанием, которое соответствует языку страницы.

**Особенности**

В данной проектной работе я впервые применил JavaScript. Научился создавать модальное окно Pop-up.

```js
function popupOpen () {
  popup.classList.add('popup_opened');
}

function popupClose () {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', function () {
  popupOpen ()
});

popupButtonClose.addEventListener('click', function () {
  popupClose ()
});

function formSubmitHandler (evt) {
  evt.preventDefault();
};
```
