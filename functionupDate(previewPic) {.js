<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hover Image Demo</title>
<style>
  body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: #f4f4f4; }
  #image {
    width: 500px; max-width: 100%; height: 300px;
    margin: 0 auto 20px;
    border: 2px solid #333; border-radius: 8px;
    background-color: #fff;
    background-size: cover; background-position: center; background-repeat: no-repeat;
    display: flex; align-items: flex-end; justify-content: center;
    text-align: center; padding: 10px; box-sizing: border-box;
    font-size: 20px; font-weight: bold; color: #222;
  }
  .preview { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .preview img { width: 110px; height: 80px; object-fit: cover; border: 2px solid #555; border-radius: 6px; cursor: pointer; }
  .preview img:focus, .preview img:hover { border-color: #e91e63; outline: none; }
  #log { max-width: 500px; margin: 24px auto 0; background: #111; color: #0f0; font-family: monospace; font-size: 13px; padding: 10px; border-radius: 6px; min-height: 80px; white-space: pre-wrap; }
</style>
</head>
<body>

<div id="image">Hover over an image below to display here.</div>

<div class="preview">
  <img tabindex="0" alt="Red Sunset" onmouseover="upDate(this)" onmouseout="unDo()" onfocus="upDate(this)" onblur="unDo()"
       src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ff5e3a'/%3E%3Cstop offset='1' stop-color='%23ffcc33'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='500' height='300' fill='url(%23g)'/%3E%3Ccircle cx='250' cy='200' r='60' fill='%23fff3b0'/%3E%3C/svg%3E">
  <img tabindex="0" alt="Blue Ocean" onmouseover="upDate(this)" onmouseout="unDo()" onfocus="upDate(this)" onblur="unDo()"
       src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%2387ceeb'/%3E%3Cstop offset='1' stop-color='%23003f7f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='500' height='300' fill='url(%23g)'/%3E%3Cpath d='M0 200 Q60 170 125 200 T250 200 T375 200 T500 200 V300 H0Z' fill='%231e6fb8'/%3E%3C/svg%3E">
  <img tabindex="0" alt="Green Forest" onmouseover="upDate(this)" onmouseout="unDo()" onfocus="upDate(this)" onblur="unDo()"
       src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Crect width='500' height='300' fill='%23c8e6c9'/%3E%3Cpolygon points='100,250 150,110 200,250' fill='%232e7d32'/%3E%3Cpolygon points='200,250 270,70 340,250' fill='%231b5e20'/%3E%3Cpolygon points='320,250 380,130 440,250' fill='%232e7d32'/%3E%3C/svg%3E">
</div>

<div id="log">Console log (mirrored here):
</div>

<script>
// Mirror console.log into the on-page box so it's visible without F12
(function () {
  const box = document.getElementById("log");
  const orig = console.log;
  console.log = function (...args) {
    orig.apply(console, args);
    const text = args.map(a => String(a).length > 70 ? String(a).slice(0, 70) + "..." : a).join(" ");
    box.textContent += "> " + text + "\n";
  };
})();

function upDate(previewPic) {
  console.log("upDate was called");
  console.log(previewPic.alt);
  console.log(previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("unDo was called");

  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
</script>
</body>
</html>