$(document).ready(function () {

    $('#home-btn').click(function (e) {
        e.preventDefault();
        window.location.href = document.location.origin + "/index";
    });

//JAVASCRIPT FOR LOOP RANGE SLIDER

//     var output = $('#output');
//     //
//     // $('#range-slider').noUiSlider({
//     //     start: [0, 100],
//     //     range: {
//     //         'min': [0],
//     //         'max': [100]
//     //     }
//     // }).on('slide', function (evt) {
//     //     var lowerHandle = false;
//     //     var upperHandle = false;
//     //     if ($(evt.target).find('.noUi-handle-lower').hasClass("noUi-active")) lowerHandle = true;
//     //     if ($(evt.target).find('.noUi-handle-upper').hasClass("noUi-active")) upperHandle = true;
//     //     // In this event handler, I want to see which of the two sliders is being moved
//     //     // Is there a property of the 'evt' parameter which would tell me this?
//     //     if (lowerHandle == true) console.log('>>> LOWER <<<')
//     //     if (upperHandle == true) console.log('>>> UPPER <<<')
//     //
//     //
//     //     output.html($(this).val().join(' - '));
//     // });

//     var slider = document.getElementById('range-slider');
//     noUiSlider.create(slider, {
//         start: [20, 80],
//         connect: true,
//         step: 1,
//         orientation: 'horizontal', // 'horizontal' or 'vertical'
//         range: {
//             'min': 0,
//             'max': 100
//         },
//         format: wNumb({
//             decimals: 0
//         })
//     });
// });

// <script type="text/javascript">  
// $('input').popup(); 
// </script>

    $(".js-range-slider").ionRangeSlider({
        type: "double"
    });


});