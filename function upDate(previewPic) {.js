function upDate(previewPic) {
  // 3a. Check that the event is triggering
  console.log("upDate was called");

  // 3b. Check the values of previewPic
  console.log(previewPic.alt);
  console.log(previewPic.src);

  // 3c. Change the text of the div with id "image"    
  document.getElementById("image").innerHTML = previewPic.alt;

  // 3e. Change the background image of the div with id "image"
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("unDo was called");

  // 4a. Reset the background image
  document.getElementById("image").style.backgroundImage = "url('')";

  // 4b. Reset the text
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}