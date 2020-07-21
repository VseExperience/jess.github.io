$(function() {

//  Fixed Header
    let header = $("#header");
    let intro = $("#about");
    let introH;
    let scrollPos;
    let windowWidth = $(window).innerWidth();

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();


        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

// Smoth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // Discrad standart behaviour of links

        let elementId = $(this).data("scroll"); // get id of block
        let elementOffset = $(elementId).offset().top; // gett offset of top of block

        if(elementId == "#services") {
            $("html, body").animate({
            scrollTop: elementOffset - 100
            });
        } else if(elementId == "#contacts") {
            $("html, body").animate({
            scrollTop: elementOffset - 150
            });
        } else {
            $("html, body").animate({
            scrollTop: elementOffset
            });
        }

    });

    if(windowWidth > 690) {
        $('.services_item').attr("data-aos", "")
    }

    if(windowWidth <= 690) {
        $('.services_inner').attr("data-aos", "")
        $('.services_item').attr("data-aos", "fade-up")
    }
});
