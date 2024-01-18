const gnb = document.querySelectorAll('.gnb > li')
const lnb = document.querySelectorAll('.lnb')
const nav_bg = document.querySelector('.nav_bg')
console.log(gnb, lnb)

nav_bg.style.height = 0;
nav_bg.style.transition = 'height 0.3s';
for(let l of lnb){
    l.style.height = '0'
    l.style.overflow = 'hidden'
    l.style.transition = 'height 0.3s'
}

//1. '.gnb > li' 모두 접근하기 위한 for 생성 
for(let g of gnb){
    //2. gnb에 마우스이벤트 시 lnb를 모두 제어하고 싶다면 
    //lnb에 모두 접근하기 위한 for 추가 생성
    for(let l of lnb){
        //3. 이벤트대상 확인 후 "g" 이벤트 함수 생성
        g.addEventListener('mouseover',()=>{
            //4. 위 이벤트 조건이 만족되었을 때 lnb모두 출력
            //모두 출력하는 변수 대상 확인 "l" 관련 속성 적용
            l.style.height = '150px'
            nav_bg.style.height = '150px'
        })
        g.addEventListener('mouseout',()=>{
            l.style.height = '0'
            nav_bg.style.height = '0'
        })
    }
}












/* for(let l of lnb){
    l.style.display = 'none'
} */

//1. 메뉴1~메뉴3 모두 제어하기 위한 반복 for문 생성
//2개 이상 한번에 제어하고싶은 대상이 == gnb 단독 1개
//다중 for가 아닌 gnb에 해당하는 for 1개만 생성
/* for(let g of gnb){
    //2. 이벤트 대상 확인 "g" 이벤트 함수 생성
    g.addEventListener('mouseover',()=>{
        //3. 이벤트 조건 만족시 실행 대상이 이벤트대상의 상대적인 관계에 해당된다면
        //가족관계 속성을 활용해서 상대적으로 잡아 원하는 속성을 처리한다.
        //가족관계 속성 : parentElement, parentNode, nextSibling, previousSibling, children, childNode
        g.children[1].style.display = 'block'
    })
    g.addEventListener('mouseout',()=>{
        g.children[1].style.display = 'none'
    })
} */