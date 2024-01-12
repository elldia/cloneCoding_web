# cloneCoding web
## MEGABOX cloneCoding
* 23/11/27 HTML5 Header 구성, main section 레이아웃 구성
* ㄴmain 1행 박스오피스 ~ 마우스 휠 아이콘 까지 진행완료
----
## 웹접근성연구소 웹접근성이란 클론코딩
* 23/12/04 HTML5 + CSS3 이용 페이지 만들기 ~ 23/12/07 end
----
## SPC 삼립 클론코딩
* 23/12/05 HTML5 구조 작업
* 23/12/06 CSS3 디자인 작업
* 23/12/07 CSS flex 추가 삼립 완성
### style guide
* 색상(배경) -> #f1f1f1
* 색상(테두리) -> #aaa
* 강조색상(배경, 글자) -> #36b4e5, #f3c300
* 색상(기본 글자, 배경) -> #000, #fff
* 메뉴 크기 = 16px
* 제목 글자 크기 = 40px
* 부제목 글자 크기 = 21px
* 내용 글자 크기 = 16px, 18px
* 강조 내용 = 31px
* 목표 내용 = 24px
----
## 서울시청 cloneCoding
* 23/12/07 클론코딩 시작
----
## 카카오 엔터프라이즈 반응형 웹 클론코딩
* 23/12/13 클론코딩 시작 ~ 23/12/15 종료
* max-width 1200 -> 900 -> 769px 반응형 설계 진행
* video + absolute 겹치는 디자인 구성
## 오늘의 집 상품 디테일 페이지 클론코딩
* 24/01/04 시작
* 24/01/04 진행 -> 좌측 이미지 썸네일 영역 'mouseover' 시 큰 이미지 변경하기 동적 진행
* 24/01/05 진행
* 속성선택자(CSS) 개념 배우기 * 모든 태그 사용 가능(form 위주로 많이 사용)
1. `선택자[속성^=값]` 속성 값이 OO으로 시작하는 대상 선택
2. `선택자[속성$=값]` 속성 값이 OO으로 끝나는 대상 선택
3. `선택자[속성*=값]` 속성 값이 OO을 포함하는 대상 선택
4. `선택자[속성=값]` 속성 값이 OO과 완벽히 일치하는 대상 선택
5. `선택자[속성]` 속성이 일치하는 대상 선택
* ex) `<i class="fa-solid fa-apple-icon"></i>`
1. `i[class^=f]`, `i[class^=fa]`, `i[class^=fa-]`
2. `i[class$=d]`, `i[class$=id]`, `i[class$=-icon]`
3. `i[class*=apple]`, `i[class*=a-a]`, `i[class*=le]`
4. `i[class=fa-solid]`, `i[class=fa-apple-icon]`
* ex) `<img src="http://naver.com/logo.jpg" title="설명" alt="자세한 설명">`
1. `img[src^=http]`, `img[title^=설]`, `img[alt^=자세]`
2. `img[src$=jpg]`, `img[title$=명]`
3. `img[src*=naver]`, `img[src*=logo]`
4. `img[src="http://naver.com/logo.jpg"]`
5. `img[src]`, `img[title]`, `img[alt]`
# 오늘의 집 쇼핑몰 동적 기능 정리
## Javascript(ES6)
### shopping/script/cart_sample.js
### 단일 DOM 객체 활용하여 반복 open/close 동적기능 활용하기
* 중요 Point! 
* javascript는 눈으로 보이는 시각적인 효과(css)에 의지하기 보단 Data에 상태에 따라 동적 기능을 처리한다. 그래야 Back-end 협업프로젝트의 DataBase에 Data개념으로 연동해서 업무를 효율적으로 진행할 수 있다.
1. data 상태 구분 용도 변수 생성하기 `...status`
2. 해당 변수에 DOM 상태 저장하기 `true`, `false`
* `DOMstatus = false` //비활성화 상태 경우
3. event DOM의 상태에 의해서 `status` 변동되는 상황 제작하기
* `DOM.addEventListener('event'()=>{ DOMstatus = !DOMstatus })`
* `!DOMstatus` script는 일회성으로 실제 변수 값에 변화를 주지 않으므로 `DOMstatus = `대입연산자를 통해서 `!DOMstatus` 반전을 대입해야 한다.
* (위) `event`에 의해서 `!DOMstatus` 매번 반전이 일어나면 `true, false`값이 `event` 할때마다 교체되는 것을 볼 수 있다.
* `true, false`가 변경된다면 논리데이터에 따라 서로 다른 결과를 보여줄 수 있는 `if` 조건문을 활용하여 `if`조건 값이 참일 때 실행 값 `else` 조건값이 거짓일 때 실행 값을 나눠서 동적 스크립트를 작성한다.