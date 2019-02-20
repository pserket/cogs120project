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
    var cue_name = $('#pic-cue-name').val();

    $('#picture-form').attr("action", "/upload_picture/" + author + "/" + name + "/" + cue_name);
    $('#picture-form').submit();
}

function audioFormBtn(author, name) {
    var cue_name = $('#audio-cue-name').val();

    $('#audio-form').attr("action", "/upload_audio/" + author + "/" + name + "/" + cue_name);
    $('#audio-form').submit();
}

function textFormBtn(author, name) {
    // var cue_name = $('#pic-cue-name').val();

    // $('#picture-form').attr("action", "/upload_picture/" + author + "/" + name + "/" + cue_name);
    // $('#picture-form').submit();
}