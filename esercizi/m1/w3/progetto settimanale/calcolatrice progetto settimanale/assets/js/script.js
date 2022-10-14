var accendi = true;
btnon = document.getElementById("on");
btnoff = document.getElementById("off");
btnon.addEventListener("click", function () {
  accendi = true;

});
btnoff.addEventListener("click", function () {
  accendi = false;
  document.getElementById('result').value= '';
  console.log(accendi);
});

function n(val) {
  if ((accendi = false)) {
    return;

  }

  document.getElementById("result").value += `${val}`;
}
function solve() {
  if ((accendi = false)) {
    return;
  }
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  return y;
}
function clearScreen() {
  document.getElementById("result").value = "";
}
function radice() {
  if ((accendi = false)) {
    return;
  }
  let x = document.getElementById("result").value;
  let y = Math.sqrt(x);
  document.getElementById("result").value = y;
  return y;
}
