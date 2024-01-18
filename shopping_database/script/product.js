/*
    container(아이템 수백개 보이는 부모 영역)안에서 item(개별아이템)요소들을 data.js(DB) 에서 가져온다.
    DB -> <p class="photo"><img src="" alt=""></p>
    DB -> <h2></h2>
    DB -> <p class="price"></p>

    DB 데이터를 가져오기 위해 필요한 요소 = div, p, h2, p
    디자인 또는 동적 기능을 적용하기 위한 클래스 선언 필요 = item, photo, price
*/
const container = document.querySelector('.container')//item의 부모 선언
let itemWrap = document.createElement('div')
let itemPhoto = document.createElement('p')
let itemTitle = document.createElement('h2')
let itemPrice = document.createElement('p')
console.log(container)

for(let i=0; i<itemDB.length; i++){
    itemWrap = document.createElement('div')
    itemPhoto = document.createElement('p')
    itemTitle = document.createElement('h2')
    itemPrice = document.createElement('p')

    itemWrap.classList.add('item')
    itemPhoto.classList.add('photo')
    itemPrice.classList.add('price')

    itemPhoto.innerHTML = `<img src=${itemDB[i].itemImg} alt="">`
    itemTitle.innerHTML = itemDB[i].itemTitle
    itemPrice.innerHTML = itemDB[i].itemPrice

    itemWrap.appendChild(itemPhoto)
    itemWrap.appendChild(itemTitle)
    itemWrap.appendChild(itemPrice)
    container.appendChild(itemWrap)
}