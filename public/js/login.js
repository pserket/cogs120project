'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

    $('#login-btn').click(function(e) {
        e.preventDefault();

        window.location.href = document.location.origin + "/index";
    });
});