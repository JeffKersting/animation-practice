var fastBtn = document.querySelector(".fast");
var mediumBtn  = document.querySelector(".medium");
var slowBtn = document.querySelector(".slow");

var fastDisplay = document.querySelector(".fast-box");
var mediumDisplay = document.querySelector(".medium-box");
var slowDisplay = document.querySelector(".slow-box");

fastBtn.addEventListener("click", applyFast);
mediumBtn.addEventListener("click", applyMedium);
slowBtn.addEventListener("click", applySlow);



function clearFast(){
  fastDisplay.classList.remove("fast-fade");
}
function clearMedium(){
  mediumDisplay.classList.remove("medium-fade");
}
function clearSlow(){
  slowDisplay.classList.remove("slow-fade");
}

function applyFast(){
  console.log("Test");
  fastDisplay.classList.add("fast-fade");
  setTimeout(clearFast, 10000)//timeout in millisecond, so clears the animation after 10s
}
function applyMedium(){
  mediumDisplay.classList.add("medium-fade");
  setTimeout(clearMedium, 5000)
}
function applySlow(){
  slowDisplay.classList.add("slow-fade");
  setTimeout(clearSlow, 2000)
}
