
$(function () {

    $(".fade-toggle").fadeToggle(500);
    $(".fade-toggle").fadeToggle(200);


    $(".fade-in").fadeIn(1000);
    $(".fade-in1").fadeIn(3000);
    $(".fade-in2").fadeIn(5000);
    
    $(".slide-left").animate({ 
        left: '50px',
        opacity: '1',
    });

    $(".slide-right").animate({ 
        right: '50px',
        opacity: '1',
    });

    $(".slide-top").animate({ 
        top: '50px',
        opacity: '1',
    });
});
 

    
