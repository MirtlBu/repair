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

    $( "#accordion" ).accordion();

})
