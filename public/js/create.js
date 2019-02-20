'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'bottom'
    });

    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    $('#back-btn').click(function(e) {
        e.preventDefault();

        window.location.href = document.location.origin + "/index";
    });
});

function pictureFormBtn(author, name) {
    console.log('derp');

    // $('#audio-form').attr("action", "/upload_picture/" + author + "/" + name);
}

function audioFormBtn(author, name) {
    console.log('derp');
}