'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

function createBtn(user) {
    console.log(user);

    $.get("/create_new/" + user).then(function(data) {
        window.location = "/create/" + user + "/" + data['name'];
    });
}

/*
 * Function that is called when the document is ready.
 */
function editDance(user, name) {
    var string = "/create/" + user + "/" + name;

    window.location = string;
}

function openDance(user, name) {
    window.location = "/dance/" + user + "/" + name;
}

function initializePage() {
    console.log("Javascript connected!");
}
