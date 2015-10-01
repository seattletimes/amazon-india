// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var dot = require("./lib/dot");
var slide = dot.compile(require("./_slide.html"));

var index = 0;

var length = data.length - 1;

var changeImage = function() {
  if (index == length) { 
    document.querySelector(".next").classList.add("disabled");
  } else {
    document.querySelector(".next").classList.remove("disabled");
  }
  if (index == 0) { 
    document.querySelector(".previous").classList.add("disabled");
  } else {
    document.querySelector(".previous").classList.remove("disabled");
  }
  document.querySelector(".index").innerHTML = `${index + 1} of ${data.length}`;
  document.querySelector(".caption").innerHTML = data[index].caption;
  var img = document.createElement("img");
  img.src = `./assets/${data[index].image}`;
  img.onload = function() {
    var frame = document.querySelector(".image");
    frame.innerHTML = "";
    frame.appendChild(img);
  }
};

changeImage();

document.querySelector(".slide-container").addEventListener("click", function(e) {
  if (e.target.classList.contains("next") && index < length) index += 1;
  if (e.target.classList.contains("previous") && index > 0) index -= 1;
  changeImage();
});