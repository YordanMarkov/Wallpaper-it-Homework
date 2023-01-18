function hideNewYear() {
    $("#new-year").hide();
}

function showNav(){
    let $nav = $("#nav-show");
    if($nav.is(":hidden")){
        $nav.show();
    } else {
        $nav.hide();
    }
}

$(document).ready(function(){
    $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});