В процессе реализации...

Next.js, {useState, useEffect, useContext, useReducer}, SSR, TypeScript, GRID.

Приложение SPA - Востребованные профессии настоящего.

Функционал:
1. Sidebar - содержит 4 главных раздела - (Курсы, Сервисы, Книги, Продукты). Каждый раздел внутри себя содержит подразделы с соответствующей информацией.
2. Внутри карточки профессии - сортировка по рейтингу и по цене.
3. Поиск профессии по приложению.



1.Реализован Routing, настройка каждой страницы для уникального адреса, в т.ч. и поиск на странице.
2. Работа с Rest API. 
3. Helpers - 1) Функция для красивого отображения стоимости курсов - 5 000 000 пример;
             2) Функция, чтобы проскланять "отзыв, отзыва, отзывов";
4. Основные стили вынесены в переменные - папка styles - globals.css
             
             
Большое количество кастомных компонентов-тэгов для ускорения построяния приложения. Структура компонента состоит из 3-х файлов: Component.tsx, Component.module.css, Component.props.ts.

В последнем файле определяется интерфейс компонента, от какого элемента наследуется и типизируются пропсы.
![2022-10-17_20-02-56](https://user-images.githubusercontent.com/101303690/196184169-482033c9-c768-4d95-b369-a45137f34e56.png)

В основном приложение построенно с помощью сетки GRID (grid-template-areas) (Работа с шаблоном сетки, именование линий).

env.local - NEXT_PUBLIC_DOMAIN=https://courses-top.ru

![2022-10-17_20-09-31](https://user-images.githubusercontent.com/101303690/196185643-f7ec7dad-7cb7-4d2b-93ac-734283192f12.png)


![2022-10-17_20-10-06](https://user-images.githubusercontent.com/101303690/196185689-da3bd78c-1a6c-413f-b182-3a7212b3490c.png)