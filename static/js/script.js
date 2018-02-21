$(function() {

    var input = document.querySelector('.upload__file'),
        textElem = document.querySelector('.upload__text'),
        EMPTY = 'No file chosen';
    input.addEventListener('change', function(e) {
        if(this.files.length) {
            textElem.innerHTML = e.target.value.split( '\\' ).pop();
        }
        else {
            textElem.innerHTML = EMPTY;
        }
    });

    function ClosePopup(e) {
        console.log(e);
        e.target.parentNode.parentNode.classList.add('popup--hidden');
    }
    const icons_close = Array.from(document.querySelectorAll('.popup__close'));
    icons_close.forEach(icon => icon.addEventListener('click', ClosePopup));

    $( "#accordion" ).accordion();

})
