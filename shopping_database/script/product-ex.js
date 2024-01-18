const container = document.querySelector('.container')
let itemWrap = document.createElement('div')
let itemPhoto = document.createElement('p')
let itemTitle = document.createElement('h2')
let itemPrice = document.createElement('price')


console.log(itemWrap, itemPhoto, itemPrice)

for(let i=0; i<itemDB.length; i++){
    itemWrap = document.createElement('div')
    itemWrap.classList.add('item')

    itemPhoto = document.createElement('p')
    itemTitle = document.createElement('h2')
    itemPrice = document.createElement('price')
    
    itemPhoto.classList.add('photo')
    itemPrice.classList.add('price')

    itemPhoto.innerHTML = `<img src=${itemDB[i].itemImg} alt="">`
    itemTitle.innerHTML = itemDB[i].itemTitle
    itemPrice.innerHTML = itemDB[i].itemPrice
    
    itemWrap.appendChild(itemPhoto)
    itemWrap.appendChild(itemTitle)
    itemWrap.appendChild(itemPrice)

    container.appendChild(itemWrap);
}
