var headerImages = [
	"img/n1.jpg",
   "img/n2.jpg",
   "img/n3.jpg",
];


function nextSrc(id) {
  var img = document.getElementById(id);
  if (img == null) return false;
  var pos = (parseInt(img.srcPos) || 0) + 1;
  if (pos == headerImages.length) pos = 0;
  img.src = headerImages[pos];
  img.srcPos = pos;
}


  function animateText(id, text, i) {
    document.getElementById(id).innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) i = 0;
    setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
  }

