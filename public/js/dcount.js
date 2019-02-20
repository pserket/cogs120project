'use strict';

$(document).ready(function() {

        $('#home-btn').click(function(e) {
            e.preventDefault();
            window.location.href = document.location.origin + "/index";
        });

//JAVASCRIPT FOR LOOP RANGE SLIDER

        $(".slider-range").slider({
            range: true,
            min: 0,
            max: 1000,
            values: [0, 1000],
            slide: function (event, ui) {
                $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                $('#s1').val(ui.values[0]);
                $('#s2').val(ui.values[1]);
            }
        });
        $(".amount").val("$" + $(".slider-range").slider("values", 0) +
            " - $" + $(".slider-range").slider("values", 1));

});
