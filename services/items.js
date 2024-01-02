exports.storage = JSON.parse(localStorage.getItem('readit-items')) || [];

exports.save = () => {
    localStorage.setItem('readit-items', JSON.stringify(this.storage));
}

exports.addItemToStorage = (item) => {
    this.storage.push(item);
    this.save();
}

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

this.storage.forEach( item => {
    this.addItem(item);
})

