// Exercici 4: registre d'usuari amb validació de camps i de la contrasenya
function comprovaFormulari() {
  var nom = document.getElementById("nom").value.trim();
  var cognoms = document.getElementById("cognoms").value.trim();
  var correu = document.getElementById("correu").value.trim();
  var p1 = document.getElementById("pass1").value;
  var p2 = document.getElementById("pass2").value;
  var formatCorreu = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nom === "" || cognoms === "" || correu === "" || p1 === "" || p2 === "") {
    alert("Error: has d'omplir tots els camps.");
  } else if (!formatCorreu.test(correu)) {
    alert("Error: el correu electrònic no és vàlid.");
  } else if (p1 !== p2) {
    alert("Error: les dues contrasenyes no coincideixen.");
  } else if (p1.length < 8) {
    alert("Error: la contrasenya ha de tenir un mínim de 8 caràcters.");
  } else {
    alert("S'ha canviat correctament la contrasenya");
  }
}

document.getElementById("canvia").addEventListener("click", comprovaFormulari);
