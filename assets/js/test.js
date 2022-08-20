export function RangeSlider() {
  var parent = document.querySelector("#rangeSlider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("input[type=range]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }
    };
  });
}