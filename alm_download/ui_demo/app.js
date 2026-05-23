document.getElementById("start").onclick = () => {
  log("Starting session...");
};

function log(t) {
  document.getElementById("log").textContent += t + "\n";
}
