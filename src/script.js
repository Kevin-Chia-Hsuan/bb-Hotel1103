// NavBar Toggle Class

//這個意思就是當網頁全部載入
$(document).ready(function () {
    var navList = $('.nav-list')//選擇nav-list這個HTML的標籤放在變數裡
    var navMenu = $('.nav-menu')//選擇nav-menu這個HTML的標籤放在變數裡
    var navContainer = $('.nav-container')//選擇nav-container這個HTML的標籤放在變數裡

    navMenu.click(function () {
        console.log(' navMenu Click')
        navContainer.toggleClass("nav-show-menu")//.toggleClass是jQuery的一個方法
    })

    //頁面滑動效果的JS語法
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

}) 