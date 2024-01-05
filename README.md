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
