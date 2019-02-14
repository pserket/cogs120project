'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'bottom'
    });

    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
});