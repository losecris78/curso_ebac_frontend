const list= document.createElement('ul');
const item = document.createElement('li')
item.textContent=('Estou na lista!');
const second = document.createElement('li')
second.textContent=('Eu também!');

list.append(item);
list.append(second);

const content = document.querySelector('#lista');
content.appendChild(list);
