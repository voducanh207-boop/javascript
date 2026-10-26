// Step 6: used by onmouseover AND onfocus
function upDate(previewPic) {
  console.log("upDate triggered for: " + previewPic.alt);
  var image = document.getElementById("image");
  image.style.backgroundImage = "url('" + previewPic.src + "')";
  image.innerHTML = previewPic.alt;
}

// Step 6: used by onmouseleave AND onblur
function unDo() {
  console.log("unDo triggered");
  var image = document.getElementById("image");
  image.style.backgroundImage = "";
  image.innerHTML = "Hover over or focus on an image below to display here.";
}

// Step 9: add tabindex to every image
function addTabFocus() {
  // 9a: confirm the onload event fires
  console.log("onload event triggered - addTabFocus running");

  // 9b: loop through each image
  var images = document.querySelectorAll(".preview");
  for (var i = 0; i < images.length; i++) {
    // 9c: add the tabindex attribute
    images[i].setAttribute("tabindex", "0");
  }
}

// Step 8: onload listener
window.onload = addTabFocus;
