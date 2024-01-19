// 로그인 탭 제목 클릭 시 해당 내용 활성화 JS
// 제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
// 통합 내용 변수
const login_c_all = document.querySelectorAll('.login_container .login_c')
console.log(login_title)
//모든 내용 숨기기 -> ID로그인만 보이기(초기)
const logic_c_all_func = () => {
    for(let cc of login_c_all){cc.style.display='none'}
}
logic_c_all_func()
login_c_all[0].style.display='block'
//초기값 ID로그인 활성화 시키기(active) *클릭 전
login_title[0].parentElement.classList.add('active')
//초기 탭 제목 디자인 숨기기
const title_active_remove = () => {
    for(let rr of login_title){rr.parentElement.classList.remove('active')}
}
//탭 제목 클릭 시 클릭한 대상에만 디자인 적용하기
login_title.forEach((t,i)=>{
    console.log(t, i)
    t.addEventListener('click',()=>{
        title_active_remove()
        t.parentElement.classList.add('active')
        logic_c_all_func()
        login_c_all[i].style.display='block'
    })
})



//=========================================================
console.log('로그인 메세지 출력=====================')
//아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 error message 출력하기
//1. 아이디 미입력 후 로그인 버튼 클릭 => "아이디를 입력해주세요"
//2. 아이디 입력, 비밀번호 미입력 후 로그인 버튼 클릭 => "비밀번호를 입력해주세요"
//3. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 => "아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
//4. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 "어서오세요 OO님"
const userIdInput = document.querySelector('#userId');
const userPwInput = document.querySelector('#userPw');
const error_message = document.querySelector('.error_message')
const loginBtn = document.querySelector('#loginBtn')
const userList = [{
    id:'admin',
    pw:'1234'
}]
console.log(userIdInput, userPwInput, error_message, loginBtn)

loginBtn.addEventListener('click',()=>{
    if(userIdInput.value === ''){//아이디 빈 문자열 검사 -> 참이라면
        error_message.innerHTML = '아이디를 입력하세요' //참일 때 실행
    }else if(userPwInput.value === ''){
        error_message.innerHTML = '비밀번호를 입력해주세요'
    }else if(userIdInput.value == userList[0].id && userPwInput.value == userList[0].pw){
        alert(`어서오세요 ${userList[0].id}님`)
    }else {
        error_message.innerHTML = '아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요.'
        userPwInput.value = ''
    }
})
