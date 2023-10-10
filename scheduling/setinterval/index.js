var nIntervalId;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervalId) {
    nIntervalId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElm = document.getElementById("my_box");
  oElm.className = oElm.className === "go" ? "stop" : "go";
}

function stopTextColor(){
    clearInterval(nIntervalId);
    nIntervalId = null;
}

document.getElementById("start").addEventListener("click", changeColor)
document.getElementById("stop").addEventListener("click", stopTextColor)
