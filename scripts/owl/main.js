$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function espandir() {
    document.getElementsByClassName("filme-principal").style.backgroundImage = "url('img/mini1.jpg')";

}