document.getElementById("black1").addEventListener("click", hideColor, showAll);
document.getElementById("teal").addEventListener("click", hideColor, showAll);
document.getElementById("blue").addEventListener("click", hideColor, showAll);
document.getElementById("navy").addEventListener("click", hideColor, showAll);
document.getElementById("lime").addEventListener("click", hideColor, showAll);
document.getElementById("white").addEventListener("click", hideColor, showAll);
document.getElementById("purple").addEventListener("click", hideColor, showAll);
document.getElementById("yellow").addEventListener("click", hideColor, showAll);
document.getElementById("olive1").addEventListener("click", hideColor, showAll);
document.getElementById("red1").addEventListener("click", hideColor, showAll);
document.getElementById("black2").addEventListener("click", hideColor, showAll);
document.getElementById("gray").addEventListener("click", hideColor, showAll);
document.getElementById("olive2").addEventListener("click", hideColor, showAll);
document.getElementById("red2").addEventListener("click", hideColor, showAll);
document.getElementById("fuchsia").addEventListener("click", hideColor, showAll);
document.getElementById("green").addEventListener("click", hideColor, showAll);

function hideColor() {
  hide(this);
}

function hide(x) {
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }

}

function showAll() {
  show(this);
}

function show(x){
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "visible";
  }

 timeoutID = window.setTimeout(() => show(this), 1000);
}