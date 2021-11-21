let sliderPosition = document.getElementById("slider-position");
let severityNumber = document.getElementById("severity-number");

sliderPosition.oninput = function () {
    severityNumber.innerHTML = sliderPosition.value;
    return;
    };