const {ipcRenderer} = require('electron')
const items = require('../services/items')

let showModal = document.getElementById('show-modal'), 
    closeModal = document.getElementById('close-modal'), 
    modal = document.getElementById('modal'),
    itemUrl = document.getElementById('url'),
    addItem = document.getElementById('add-item'),
    itemsList = document.getElementById('items');

let itensList = [];

const toggleModalButtons = () => {
    if(addItem.disabled){
        addItem.disabled = false;
        addItem.style.opacity = 1;
        addItem.innerText = 'Add Item';
        closeModal.display = 'inline';
    } else {
        addItem.disabled = true;
        addItem.style.opacity = .5;
        addItem.innerText = 'Adding...';
        closeModal.display = 'none';
    }
}
    
showModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    itemUrl.focus();
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})

addItem.addEventListener('click', () => {
    
    if(itemUrl.value){
        console.log(itemUrl.value)
        ipcRenderer.send('new-item', itemUrl.value)
        toggleModalButtons()
        
    }    
})

ipcRenderer.on('new-item-success', (e, newItem) => {
    console.log(newItem);
    items.addItem(newItem);
    toggleModalButtons();
    itemUrl.value = '';
    itemUrl.focus();
})

itemUrl.addEventListener('keyup', e => {
    if(e.key === 'Enter') addItem.click()
    if(e.key === 'Escape') closeModal.click()
} )