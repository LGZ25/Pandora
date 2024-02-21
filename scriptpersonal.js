var swiper = new Swiper(".myswiper-1",{
    slidersPerView:1,
    sapceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
    
    
});



let tabInputs = document.querySelectorAll(".tabinput");

tabInputs.forEach(function(input){

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById("swiper"+ id );
        thisSwiper.swiper.update();

    })
}); 

