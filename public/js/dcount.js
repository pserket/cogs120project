'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

    $('#home-btn').click(function(e) {
        e.preventDefault();
        window.location.href = document.location.origin + "/index";
    });
});

//JAVASCRIPT FOR LOOP RANGE SLIDER
$(document).ready(function() {
    $("#slider").slider({
        min: 0,
        max: 100,
        step: 1,
        values: [10, 90],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });
});