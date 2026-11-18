// Exercici 3: rellotge (núvol flotant) que compta el temps a la pàgina fins la propera recàrrega
var segonsTotals = 0;

function dosXifres(n) {
  return (n < 10 ? "0" : "") + n;
}

function actualitzaRellotge() {
  segonsTotals++;
  var h = Math.floor(segonsTotals / 3600);
  var m = Math.floor((segonsTotals % 3600) / 60);
  var s = segonsTotals % 60;
  document.getElementById("rellotge").textContent =
    dosXifres(h) + ":" + dosXifres(m) + ":" + dosXifres(s);
}

setInterval(actualitzaRellotge, 1000);
