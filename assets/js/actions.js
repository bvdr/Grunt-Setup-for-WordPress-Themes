///////////////////////////////////////////////////////////////////////////////
/// ACTIONS
///////////////////////////////////////////////////////////////////////////////

// DOCUMENT READY
jQuery(document).ready(function ($) {



}); //end document ready


// DOCUMENT SCROLL
// ---------------------

$(document).scroll(function () {

});



// DOCUMENT KEYDOWN
// ---------------------

$(document).keydown(function (e) {
    switch (e.which) {
        case 39: // right
            break;

        case 37: // left
            break;

        case 27: // esc
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


// DOCUMENT AJAX COMPLETE
// ---------------------

jQuery(document).ajaxComplete(function ($) {
});

