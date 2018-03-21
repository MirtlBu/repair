$(function() {
    resizeFotorama();

    var input = document.querySelector('.upload__file'),
        textElem = document.querySelector('.upload__text'),
        EMPTY = 'No file chosen';
    textElem.innerHTML = EMPTY;
    input.addEventListener('change', function(e) {
        if(this.files.length) {
            textElem.classList.remove('upload__text--empty');
            textElem.innerHTML = e.target.value.split( '\\' ).pop();
        }
        else {
            textElem.classList.add('upload__text--empty');
            textElem.innerHTML = EMPTY;
        }
    });
    textElem.addEventListener('click', function(e) {
        if(textElem.innerHTML) {
            textElem.classList.add('upload__text--empty');
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

    function resizeFotorama() {
        if (window.innerWidth < 1024) {
            $('.fotorama').fotorama({
              ratio: 800/850
            });
        }
        else if (window.innerWidth >= 1024 && window.innerWidth < 1200) {
            $('.fotorama').fotorama({
              ratio: 800/570
            });
        }
        else if (window.innerWidth >= 1200) {
            $('.fotorama').fotorama({
              ratio: 800/445
            });
        }
    }

    window.onresize = function(event) {
        resizeFotorama();
    };

})
