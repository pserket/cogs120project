

$(document).ready(function() {

        $('#home-btn').click(function(e) {
            e.preventDefault();
            window.location.href = document.location.origin + "/index";
        });

//JAVASCRIPT FOR LOOP RANGE SLIDER

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
});
