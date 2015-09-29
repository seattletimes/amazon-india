// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var dot = require("./lib/dot");
var slide = dot.compile(require("./_slide.html"));

var index = 0;

var changeImage = function() {
  if (index == data.length) { 
    document.querySelector(".next").classList.add("disabled");
  } else {
    document.querySelector(".next").classList.remove("disabled");
  }
  if (index == 0) { 
    document.querySelector(".previous").classList.add("disabled");
  } else {
    document.querySelector(".previous").classList.remove("disabled");
  }
  document.querySelector(".caption").innerHTML = data[index].caption;
  document.querySelector(".image").innerHTML = `<img src="./assets/${data[index].image}">`;
};

changeImage();

document.querySelector(".slide-container").addEventListener("click", function(e) {
  if (e.target.classList.contains("next") && index < data.length) index += 1;
  if (e.target.classList.contains("previous") && index > 0) index -= 1;
  changeImage();
});