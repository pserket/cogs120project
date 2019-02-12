'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();

    $('.dance').click(function(e) {
        e.preventDefault();

        window.location.href = document.location.origin + "/dance";
    });
});

/*
 * Function that is called when the document is ready.
 */
function editDance(user, name) {
    // window.location.href = document.location.origin + "/dance";
    console.log('edit');
};

function openDance(user, name) {
    window.location.href = document.location.origin + "/dance";
};

function initializePage() {
    console.log("Javascript connected!");
};