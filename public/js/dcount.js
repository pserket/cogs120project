$(document).ready(function () {

    $('#home-btn').click(function (e) {
        e.preventDefault();
        window.location.href = document.location.origin + "/index";
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double"
    });
});