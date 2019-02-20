$(document).ready(function () {

    $('#home-btn').click(function (e) {
        e.preventDefault();
        window.location.href = document.location.origin + "/index";
    });

//JAVASCRIPT FOR LOOP RANGE SLIDER

    var output = $('#output');

    $('#range-slider').noUiSlider({
        start: [0, 100],
        range: {
            'min': [0],
            'max': [100]
        }
    }).on('slide', function (evt) {
        var lowerHandle = false;
        var upperHandle = false;
        if ($(evt.target).find('.noUi-handle-lower').hasClass("noUi-active")) lowerHandle = true;
        if ($(evt.target).find('.noUi-handle-upper').hasClass("noUi-active")) upperHandle = true;
        // In this event handler, I want to see which of the two sliders is being moved
        // Is there a property of the 'evt' parameter which would tell me this?
        if (lowerHandle == true) console.log('>>> LOWER <<<')
        if (upperHandle == true) console.log('>>> UPPER <<<')

<<<<<<< HEAD
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
=======

        output.html($(this).val().join(' - '));
    });
>>>>>>> 8c7e1ef942297ceadbc761d2e7fe064d38184a02
});
