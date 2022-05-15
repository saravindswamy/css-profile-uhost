var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoSelectionButton = document.querySelector('.modal button')
var selectPlanButtons = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')
var ctaButton = document.querySelector(".main-nav__item--cta")

// console.dir(backdrop)

// backdrop.style.display = 'block'

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block'
        // backdrop.style.display = 'block'
        // modal.className = 'open';
        modal.classList.add('open')
        backdrop.style.display = 'block'
        setTimeout(function () {

            backdrop.classList.add('open')
        }, 10)
    })
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')
    modalClose();
})

if (modalNoSelectionButton) {

    modalNoSelectionButton.addEventListener('click', modalClose)
}

function modalClose() {
    if (modal) {
        modal.classList.remove('open')
    }
    backdrop.classList.remove('open')
    setTimeout(function () {
        backdrop.style.display = 'none'

    }, 200)

}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open')
    backdrop.style.display = 'block'
    setTimeout(function () {

        backdrop.classList.add('open')
    }, 10)
})

ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event)
})

ctaButton.addEventListener('animationend', function (event) {
    console.log('Animation ended', event)
})

ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event)
})