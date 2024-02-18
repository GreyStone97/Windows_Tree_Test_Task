const treeEl = document.getElementById("tree");

// создание дерева
function createTree(data, parentId, parentEl) {
    const children = data.filter((node) => node.head === parentId);

    if(children.lenght === 0)  return;

    const ul = document.createElement("ul");
    parentEl.appendChild(ul);

    // сортировка по возрастанию показателя sorthead
    children.sort((b, e) => b.sorthead - e.sorthead);

    children.forEach((child) => {
        const li = document.createElement("li");
        const textNode = document.createTextNode(`${child.name}
        (${child.price})`);

        li.appendChild(textNode);
        ul.appendChild(li);

        if(child.node === 1)
            createTree(data, child.id, li);
    });
}

// получение данных 
async function fetchData() {
    const result = await fetch("rest.json");
    const data = await result.json();
    const services = data.services;
    console.log(services);

    createTree(services, null, treeEl);
}

fetchData();