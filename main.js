(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();

/* para lograr que el primer elemento tenga el desplazamiento paralax hay que darle un identificador y seleccionarlo*/ 

const paralax = document.getElementById("paralax");


window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    
    // console.log("offset" + offset);
    //este de arriba es el offset normal del scroll de la pantalla.
    //console.log()"offset + 0.7" + offset * 0.7
    //con esta linea se altera el numero que nos da el scroll de la pantalla, ralentizandolo.

    paralax.style.backgroundPositionY = offset * 0.7 + "px";
    

})


    