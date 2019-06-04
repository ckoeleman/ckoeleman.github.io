// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// Sticky Nav
$(document).ready(function(){
$("#sticker").sticky({topSpacing:0});
});

// Nav Background Fade
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("#sticker").addClass("scrolled");
        } else {
            $("#sticker").removeClass("scrolled");
        }
    }); 
});

// Nav Font Color Fade
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".nav-item").addClass("scrolled");
        } else {
            $(".nav-item").removeClass("scrolled");
        }
    });
});



//smooth scroll and active nav
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('nav-active');
        })
        $(this).addClass('nav-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("nav-active");
            currLink.addClass("nav-active");
        }
        else{
            currLink.removeClass("nav-active");
        }
    });
}





$(document).ready(function() {     
    $('#nav-mobile').hover(function(){     
        $('#nav-mobile-ul').fadeIn(0);    
    },     
    function(){    
        $('#nav-mobile-ul').fadeOut(0);     
    });
}); 

$(document).ready(function() {     
    $('#nav-mobile li').hover(function(){     
        $(this).find('a.nav-item').addClass('active');    
    },     
    function(){    
        $(this).find('a.nav-item').removeClass('active');    
    });
}); 















// Mobile Bar Color Fade
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 75) {
            $("#shiftnav-toggle-main").addClass("scrolled");
        } else {
            $("#shiftnav-toggle-main").removeClass("scrolled");
        }
    });
});



