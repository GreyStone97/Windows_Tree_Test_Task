# Windows Tree Test Task
## Тестовое задание (Js разработчик):
Построить и вывести в виде web-страницы дерева n-ой вложенности. Референс дерева подобно дереву директорий проводника Windows (каждый следующий слой смещать вправо).

![Screenshot](https://github.com/GreyStone97/windows_tree_test/assets/61186198/7642b5bd-e7da-4669-970a-4b80ced8bce1)

Состав строк: название (стоимость)

Данные: Приходит по rest api стек данных в формате json.

Описание состава данных:
{
    "services": [
        {
            "id": int,
            "head": int,
            "name": str,
            "node": int,
            "price": float,
            "sorthead": int
        }
    ]
}

head = id вышележащего узла (null означает, что услуга находится в корневом узле)

node = флаг “узел дерева” (1-узел, 0-лист)

В рамках одного слоя нужно выводить строки в порядке возрастания показателя sorthead.

Для проверки использовать пример ответа api:
{
    "services": [
        {
            "id": 1,
            "head": null,
            "name": "Проф.осмотр",
            "node": 0,
            "price": 100.0,
            "sorthead": 20
        },
        {
            "id": 2,
            "head": null,
            "name": "Хирургия",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 3,
            "head": 2,
            "name": "Удаление зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 4,
            "head": 3,
            "name": "Удаление зуба",
            "node": 0,
            "price": 800.0,
            "sorthead": 10
        },
        {
            "id": 5,
            "head": 3,
            "name": "Удаление 8ого зуба",
            "node": 0,
            "price": 1000.0,
            "sorthead": 30
        },
        {
            "id": 6,
            "head": 3,
            "name": "Удаление осколка зуба",
            "node": 0,
            "price": 2000.0,
            "sorthead": 20
        },
        {
            "id": 7,
            "head": 2,
            "name": "Хирургические вмешательство",
            "node": 0,
            "price": 200.0,
            "sorthead": 10
        },
        {
            "id": 8,
            "head": 2,
            "name": "Имплантация зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 20
        },
        {
            "id": 9,
            "head": 8,
            "name": "Коронка",
            "node": 0,
            "price": 3000.0,
            "sorthead": 10
        },
        {
            "id": 10,
            "head": 8,
            "name": "Слепок челюсти",
            "node": 0,
            "price": 500.0,
            "sorthead": 20
        }
    ]
}



