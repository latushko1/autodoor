const menu = document.querySelector('.mobile')
const burger = document.querySelector('.burger')

function burgerMenu () {
    burger.addEventListener ('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active-mobile')
    })
}
burgerMenu()

const mobile= document.querySelector('.mobile')
const mobileItem1 = document.querySelector('[data-mobile="item"]')

mobile.addEventListener('click', function(e){
    if(e.target.dataset.mobile === "item" ) {
        burger.classList.toggle('active')
        menu.classList.toggle('active-mobile')
    }
})

