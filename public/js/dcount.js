'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

    $('#back-btn').click(function(e) {
        e.preventDefault();
        window.location.href = document.location.origin + "/index";
    });

});
function editDance(user, name) {
    var string = "/create/" + user + "/" + name;

    window.location = string;
}