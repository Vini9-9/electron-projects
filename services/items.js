let items = document.getElementById('items');

exports.addItem = item => {

    let itemNode = document.createElement('div');

    itemNode.setAttribute('class', 'read-item')

    itemNode.innerHTML = `
        <img src=${item.screenshot} alt="">
        <h2> ${item.title} </h2>
    `;

    items.appendChild(itemNode);
}