
const buttonMenu = document.querySelector('#btn-menu')
const classContainer = document.querySelector('.container')
const buttonSearch = document.querySelector('#btn-search')


buttonMenu.addEventListener('click', function (event) {
    classContainer.classList.toggle('sidebar-close')
})

buttonSearch.addEventListener('click', function (event) {
    classContainer.classList.remove('sidebar-close')
})