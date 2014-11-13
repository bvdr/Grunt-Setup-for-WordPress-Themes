///////////////////////////////////////////////////////////////////////////////
/// ACTIONS
///////////////////////////////////////////////////////////////////////////////

// DOCUMENT READY
jQuery(document).ready(function ($) {

    if ($.cookie('popup') == 'once') {
        $.cookie('popup', '0');
    }
    // INFINITE SCROLL
    // ---------------------

    $('#thegrid').infinitescroll({
        navSelector: "#nav-below",
        nextSelector: "#nav-below .nextpostslink",
        itemSelector: "article",
        loading: {
            msgText: "<div class='spinbox-wrap'><div class='spinbox'><div class='spin'></div></div></div></div>",
            finishedMsg: "<div class='textmsg'>That's all. Don't forget to SHARE!</div>"
        },
        extraScrollPx: 120,
        bufferPx: 1500,
        animate: false,
        debug: true
    });

    if ($("#next-alerts").length > 0) {
        jQuery(window).unbind('.infscr');
        jQuery('#next-alerts').on('tap', function () {
            jQuery(this).parent().hide();
            jQuery('#thegrid').infinitescroll('retrieve');
            jQuery('.single #content').infinitescroll('retrieve');
            return false;
        });
    }

    // MODAL WINDOWS
    // ---------------------

    $('#feedback').popup({
        opacity: 0.8,
        transition: 'all 0.3s',
        escape: false,
        blur: false,
        autozindex: true,
        closeelement: '.popup-modal-dismiss',
        closetransitionend: function () {
            $('.state2').hide();
            $('.state1').show();
        }
    });

    // TAP EVENTS

    $(".nevermind").on('tap', function () {
        $('.state1').hide();
        $('.state2').show();
        FB.XFBML.parse();
    });

    $(".share").on('tap', function (event) {
        event.preventDefault();
        $target = event.target;
        window.open( $target.href, '_blank'); // <- This is what makes it open in a new window.

        $('.state1').hide();
        $('.state2').show();
        $.cookie('popup', 'shown', {expires: 7});
    });

    $(".shr").on('tap', function (event) {
        event.preventDefault();
        $target = event.target;
        window.open(
            $target.href,
            '_blank' // <- This is what makes it open in a new window.
        );
    });



    $(".sclose").on('tap', function () {
        $('.subscribe-container').toggle();
    });
    $(".btnsubscribe").on('tap', function () {
        $('.subscribe-container').toggle();
    });


    // ANCHOR TAP
    // ---------------------

    $('a.tap').on('tap', function (event) {
        event.preventDefault();
        $target = event.target;
        window.location = $target.href;
    });


    // AJAX SUBSCRIBE TO NEWSLETTER
    // ---------------------

    $(".signup-form").submit(function (e) {
        e.preventDefault();

        var $form = $(this),
            name = $form.find('input[name="name"]').val(),
            email = $form.find('input[name="email"]').val(),
            url = $form.attr('action');

        $.post(url, {name: name, email: email},
            function (data) {
                if (data) {
                    if (data == "Some fields are missing.") {
                        $(".status").text("Please fill in your email.");
                        $(".status").css("color", "red");
                    }
                    else if (data == "Invalid email address.") {
                        $(".status").text("Your email address is invalid.");
                        $(".status").css("color", "red");
                    }
                    else if (data == "Invalid list ID.") {
                        $(".status").text("Your list ID is invalid.");
                        $(".status").css("color", "red");
                    }
                    else if (data == "Already subscribed.") {
                        $(".status").text("You're already subscribed!");
                        $(".status").css("color", "red");
                        $.cookie('subscribed', '1', {expires: 365, path: '/'});
                        setTimeout(function () {
                            $('#floating-email-subscription').fadeOut();
                        }, 2000);
                    }
                    else {
                        $(".subscribe-email").hide();
                        $(".status").text("You're subscribed!");
                        $(".status").css("color", "green");
                        $.cookie('subscribed', '1', {expires: 365, path: '/'});
                        setTimeout(function () {
                            $('#floating-email-subscription').fadeOut();
                        }, 2000);
                    }
                }
                else {
                    alert("Sorry, unable to subscribe. Please try again later!");
                }
            }
        );
    });

    $("#signup-form").keypress(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $(this).submit();
        }
    });

    $("#submit-btn").on('tap', function (e) {
        e.preventDefault();
        $("#signup-form").submit();
    });

    //Ajax LIKE JS
    //////////////////////////////////////////////////////////

    $(".likepost").on('tap', function () {
        if ($.cookie('vote') !== 'voted') {
            like = $(this).attr("like");
            dislike = $(this).attr("dislike");
            pid = $(this).attr("pid");
            $.ajax({
                url: "/wp-admin/admin-ajax.php",
                data: {
                    'action': 'likedislikes',
                    'like': like,
                    'pid': pid,
                    'dislike': dislike
                },
                success: function (data) {
                    var json = JSON.parse(data);
                    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                    var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
                    var decimal_places = 1;
                    var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 100;
                    var likepercent = (json["likes"] * 100) / (json["votes"]);
                    var dislikepercent = (json["dislikes"] * 100) / (json["votes"]);

                    //$('#like-count').animateNumber({number: json["likes"], numberStep: comma_separator_number_step});
                    //$('#dislike-count').animateNumber({number: json["dislikes"], numberStep: comma_separator_number_step});
                    //$('#number-count').animateNumber({number: json["votes"], numberStep: comma_separator_number_step});
                    $('#like-count').animateNumber({number: likepercent, numberStep: percent_number_step});
                    $('#dislike-count').animateNumber({number: dislikepercent, numberStep: percent_number_step});
                    $('#number-count').animateNumber({number: json["votes"], numberStep: comma_separator_number_step});

                    $('#votes_btn').removeClass('diplaynone');
                    $.cookie('vote', 'voted', {expires: 7});
                    setTimeout(function () {
                        openPopup();
                    }, 750);
                },
                error: function (errorThrown) {
                    console.log('ajax error');
                }
            });
        } else {
            setTimeout(function () {
                openPopup();
            }, 20);
        }
    });

    // SHARE LIKE ON HOVER IMAGES
    // ---------------------

    if (!jQuery.browser.mobile) {

        fbklike = $('.btnfacebook').attr("href");
        twttwitt = $('.btntwitter').attr("href");
        postlink = $('.btnpinterest').attr("data-permalink");
        postdesc = $('.btnpinterest').attr("data-description");
        ggleshare = $('.gglesharebtn').attr("href"); //todo to create a .gglesharebtn button in content

        var imageElements = $('.entry-content img');
        for (var i = 0; i < imageElements.length; i++) {



            $(imageElements[i]).wrap("<div class='content_image_extracted'></div>");
            //$( ".size-full" ).wrap( "<div class='content_image_extracted'></div>" );
           if ( $(imageElements[i]).hasClass("wp-smiley") ){
               $(imageElements[i]).unwrap();
               break;
            }

            container = $(imageElements[i]).parent();
            imagesrc = $(imageElements[i]).attr("src");
            convertedSrc = encodeURIComponent(imagesrc);

            container.append("" +
            "<div class='share-panel overlay'>" +
            "<ul class='share-btns'>" +
            "<li class='btn fb fblikeovl'><a class='shr' href='' target='_blank'><i class='fa fa-facebook'></i></a></li>" +
            "<li class='btn twitter twtovl'><a class='shr' href='' target='_blank'><i class='fa fa-twitter'></i></a></li>" +
            "<li class='btn pinterest pintovl'><a class='shr' href='http://www.pinterest.com/pin/create/button/?url=" + postlink + "&media=" + convertedSrc + "&description="+postdesc+"' data-share-media='' target='_blank'><i class='fa fa-pinterest'></i></a></li>" +
            "<li class='btn ggle last pstoggl'><a class='shr' href='' target='_blank'><i class='fa fa-google-plus'></i></a></li>" +
            "</ul>" +
            "</div>");

            $('.fblikeovl a', container).attr("href", fbklike);
            $('.twtovl a', container).attr("href", twttwitt);
            $('.pintovl a', container).attr("data-share-media", imagesrc);
            $('.pstoggl a', container).attr("href", ggleshare);
        }



    }

    if (jQuery.browser.mobile) {
        fbklike = $('.btnfacebook').attr("href");
        twttwitt = $('.btntwitter').attr("href");
        pinterestbtn = $('.btnpinterest').attr("href");
    }



    // COPY FACEBOOK ACTION FROM MAIN SHARE ACTIONS BUTTONS AND PASTE IT TO OTHER ACTION BUTTONS IN THE PAGE
    // ---------------------

    function addShareAction(fbklike, twttwitt){
        $('.fb-share-btn').attr("href", fbklike).attr("target","_blank");
        $('#share-on-facebook-logo').attr("href", fbklike).attr("target","_blank");
        $('#share-button .facebook').attr("href", fbklike).attr("target","_blank");
        $('#sharepp-fb-button').attr("href", fbklike).attr("target","_blank");
    }
    addShareAction(fbklike, twttwitt);


    // COOKIE ACCEPTANCE
    // ---------------------

    if (($.cookie('SM_CK') !== '1' )) {
        setTimeout(function () {
            $('#tto-cookieMessage').fadeIn();
        }, 3000);
        $("#acceptCookies").on('tap', function () {
            $('#tto-cookieMessage').fadeOut();
            $('#feedbackbtn').removeClass('hide-tl');
            $.cookie('SM_CK', '1', {expires: 365, path: '/'});
        });
    }

    // NETWORK LOGO
    // ---------------------

    $('#primary-logo').on('tap', function (e) {

    });


    // CALCULATE ARROW POSITION
    // ----------------------

    if ( $('#contentcontainer.nosidebar').length ) {

        var windoww = $(document).width();
        var contentw = $('#content').width();
        var distfromc = 80;
        var arrowposition = parseInt((windoww - contentw) / 2 - distfromc - 57);


        setTimeout(function () {
            $('.prev-post-arrow').css('right', arrowposition + 'px').addClass('fadeInRight');
            $('.next-post-arrow').css('left', arrowposition + 'px').addClass('fadeInLeft');
            $('.prev-next').show();
        }, 2000);


        window.onresize = function (event) {
            var windoww = $(document).width();
            var contentw = $('#content').width();
            var distfromc = 80;
            var arrowposition = parseInt((windoww - contentw) / 2 - distfromc - 57);

            $('.prev-post-arrow').css('right', arrowposition + 'px');
            $('.next-post-arrow').css('left', arrowposition + 'px');
        };
    }

    // TOGGLE THE MOBILE MENU
    // ----------------------

    $("#search-mobile-toggle").on('tap', function () {
        $("#search-mobile-form").toggle();
    });

    // VIDEO OVERLAY
    // ----------------------

    // ANCHOR TAP
    // ---------------------

    $('.po-next').on('tap', function () {
        $('.action-text').hide();
        $('.throb-group').show();
        target = $('.po-next').attr('data-href');
        window.location = target;
    });

    $('.po-this').on('tap', function () {
        $('#player').removeClass("blur_video")
        $('#player-overlay').hide();
        player.playVideo();
        return false;
    });



}); //end document ready


// DOCUMENT SCROLL
// ---------------------

$(document).scroll(function () {
    $('#iconmenu').toggleClass('scrolled', $(document).scrollTop() >= 50);
    $('#mobilemenu').toggleClass('scrolled', $(document).scrollTop() >= 50);
});

if ($('#sliding-socials').length) {
    $(window).resize(function () {
        adjust_sidesocial_pos();
    });
    $(document).scroll(function () {
        adjust_sidesocial_pos();
    });
}


// DOCUMENT KEYDOWN
// ---------------------

$(document).keydown(function (e) {
    switch (e.which) {
        case 39: // right
            $('#st-container').toggleClass('st-menu-open');
            $("body").toggleClass('st-navigation-open');
            break;

        case 37: // left
            $('#st-container').removeClass('st-menu-open');
            $(".st-pusher").removeClass('closemenu');
            $("body").removeClass('st-navigation-open');

            break;

        case 27: // esc
            $('#st-container').toggleClass('st-menu-open');
            $(".st-pusher").toggleClass('closemenu');
            $("body").toggleClass('st-navigation-open');
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


// DOCUMENT AJAX COMPLETE
// ---------------------

jQuery(document).ajaxComplete(function ($) {
    jQuery('#next-alerts').parent().show();
});


// DOCUMENT PAGE LEAVE
// ---------------------

jQuery(document).on('pageleave', function () {
    if ($(window).width() > 1044 && $.cookie('SM_DontLeave') !== 'closed') {
        dontLeave();
    }
});
jQuery.fn.pageleave({limitY: 3, timeTillActive: 5000});


// FUNCTIONS
// ---------------------

function adjust_sidesocial_pos() {
    var offset = $('#content').offset();
    var offsetobj = $('#top-social-actions').offset().top - $(window).scrollTop();
    if ((parseInt(offsetobj) * -1) >= 0) {
        $('#sliding-socials').css('position', 'fixed');
        $('#sliding-socials').css('left', '' + (parseInt(offset.left) - 59 ) + 'px');
        $('#sliding-socials').css('top', '69px');
    } else {
        $('#sliding-socials').css('position', 'absolute');
        $('#sliding-socials').css('left', '-50px');
        $('#sliding-socials').css('top', '78px');
    }
}

var showed = 0;
var dlshowed = 0;

function dontLeave() {
    if (($.cookie('SM_DontLeave') !== 'closed' ) && (dlshowed == 0)) {
        jQuery('#dont-leave').popup({
            opacity: 0.8,
            transition: 'all 0.3s',
            escape: false,
            offsettop: 200,
            blur: false,
            autozindex: true,
            closeelement: '.popup-modal-dismiss',
            closetransitionend: function () {
                //$('.state1').show();
                $.cookie('SM_DontLeave', 'closed', {expires: 7, path: '/'});
            },
            onopen: function () {
                $.cookie('SM_DontLeave', 'showed');
                dlshowed++;
            },
            autoopen: true
        });
    }
}

function openPopup() {
    if (($.cookie('popup') !== 'shown' ) && (showed == 0)) {
        jQuery('#sharepp').popup({
            opacity: 0.8,
            transition: 'all 0.3s',
            escape: false,
            offsettop: 200,
            blur: false,
            autozindex: true,
            closeelement: '.popup-modal-dismiss',
            closetransitionend: function () {
                $('.state2').hide();
                $('.state1').show();
                $.cookie('popup', 'once');
            },
            onopen: function () {
                $.cookie('popup', 'once');
                showed++;
            },
            autoopen: true
        });
    }
}

function openPopupOnscroll() {
    $(window).load(function () {
        $(window).one('mousemove', function () {
        }).one('scroll', function () {
            setTimeout(function () {
                openPopup();
            }, 10000);
        });
    });
}

function fbShare(url, title, descr, image, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function twtShare(url, text, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://twitter.com/share?text=' + text + '&url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function pinShare(url, descr, media, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://pinterest.com/pin/create/button/?url=' + url + '&description=' + descr + '&media=' + media, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function googleShare(url, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://plus.google.com/share?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function ajaxPageviews() {
    // AJAX NUMBER OF VIEWS
    var pid = $('article').attr("pid");
    $.ajax({
        url: "/wp-admin/admin-ajax.php",
        data: {
            'action': 'setpostviews',
            'pid': pid
        },
        success: function (data) {
            // This outputs the result of the ajax request
            // var shares = data;
            // console.log ( shares );
            //console.log ( json );
        },
        error: function (errorThrown) {
            console.log('ajax error');
        }
    });
}

function ajaxGetSharedNumber() {
    // AJAX NUMBER OF VIEWS
    var slink = window.location.href;
    $.ajax({
        url: "/wp-admin/admin-ajax.php",
        data: {
            'action': 'getsharenumbers',
            'slink': slink
        },
        success: function (data) {
            var shares = parseInt(data);
            var unit = '';

            if (shares > 1000000000){
                shares = (shares / 1000000000);
                shares = shares.toFixed(2);
                unit = 'b';
            }
            else if (shares > 1000000){
                shares = (shares / 1000000);
                shares = shares.toFixed(2);
                unit = 'm';
            }
            else if (shares > 1000){
                shares = Math.round(shares / 1000);
                unit = 'k';
            }

            if (shares > 0){
                $('.fb-share-cnt').css('display','inline-block');
            }
            var percent_number_step = $.animateNumber.numberStepFactories.append(unit);

            setTimeout(
                function () {
                    $('#share-count').animateNumber({
                        number: shares,
                        easing: 'easeInQuad',
                        numberStep: percent_number_step
                    });
                }, 500);

            //console.log ( 'ajax done' );
            //console.log ( json );
        },
        error: function (errorThrown) {
            console.log('ajax error');
        }
    });
}

function endVideoOverlay() {
    if ( jQuery('#player').width() < 730 ) {
        $('#player').addClass("blur_video");
        $('.po-resume').hide();
        $('.enjoying-this').hide();
        $('.po-repeat').show();
        $('.thank-you').show();
        $('#player-overlay').show();
    }
}

function pauseVideoOverlay() {
    if ( jQuery('#player').width() < 730) {
        $('#player').addClass("blur_video");
        $('.po-resume').show();
        $('.thank-you').hide();
        $('.po-repeat').hide();
        $('.enjoying-this').show();
        $('#player-overlay').show();
    }
}