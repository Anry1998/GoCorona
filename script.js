$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__button, .header__burger, .header__container, .header__body, .button__blue, .body__list').toggleClass('active')
        $('body').toggleClass('lock')
    })
})