//Modal login and register
const btnRegister = document.querySelector('.btn__register')
const btnLogin = document.querySelector('.btn__login')
const modal =  document.querySelector('.modal')
const modalBody = document.querySelector('.modal__body')
const btnBacks = document.querySelectorAll('.btn__back-js')
const btnSwLogin = document.querySelector('.switch-btn__login-js')
const btnSwRegister = document.querySelector('.switch-btn__register-js')

if(btnRegister || btnLogin){
       btnRegister.onclick = function() {
              modal.style.display = 'flex'
              document.querySelector('.auth-form-login').classList.add('close')
       }
       btnLogin.onclick = function () {
              modal.style.display = 'flex'
              document.querySelector('.auth-form-register').classList.add('close')
       
          }
       modal.onclick=function () {
              modal.style.display = "none"
              document.querySelector('.auth-form-login').classList.remove('close')
              document.querySelector('.auth-form-register').classList.remove('close')
       } 
       modalBody.onclick=function (event) {
              event.stopPropagation();
       }
       for( const btnBack of btnBacks){
              btnBack.onclick=function (){
              modal.style.display = "none"
              document.querySelector('.auth-form-login').classList.remove('close')
              document.querySelector('.auth-form-register').classList.remove('close')
              }
       }
       btnSwRegister.onclick=function () {
              modal.style.display = 'flex'
              document.querySelector('.auth-form-register').classList.remove('close')
              document.querySelector('.auth-form-login').classList.add('close')
       }
       btnSwLogin.onclick = function () {
              modal.style.display = 'flex'
              document.querySelector('.auth-form-register').classList.add('close')
              document.querySelector('.auth-form-login').classList.remove('close')
       }

}


// search history
// const inputSearch = document.querySelector('.header__search-input')
// const searchHistory = document.querySelector('.header__search-input-history-js')

// inputSearch.onfocus = function() {
//        searchHistory.style.display='block'
// }

