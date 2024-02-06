document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments DOM
  let zonesSaisie = document.querySelector(".zones-saisie input");
  let btnAc = document.querySelector("#AC");
  let btnSquare = document.querySelector("#square");
  let btnModulo = document.querySelector("#modulo");
  let btnDivision = document.querySelector("#division");
  let btnMultiplication = document.querySelector("#multiplication");
  let btnSoustraction = document.querySelector("#soustraction");
  let btnPlus = document.querySelector("#plus");
  let btnPoint = document.querySelector("#point");
  let affichageOperation = document.querySelector("#calculencours");
  let btnEqual = document.querySelector("#equal");

  let btnZero = document.querySelector("#zero");
  let btnOne = document.querySelector("#one");
  let btnTwo = document.querySelector("#two");
  let btnThree = document.querySelector("#three");
  let btnFour = document.querySelector("#four");
  let btnFive = document.querySelector("#five");
  let btnSix = document.querySelector("#six");
  let btnSeven = document.querySelector("#seven");
  let btnHeight = document.querySelector("#height");
  let btnNine = document.querySelector("#nine");

  // Fonction pour gérer le clic sur les boutons numériques
  function handleButtonClick(value) {
    zonesSaisie.value =
      zonesSaisie.value === "0" ? value : zonesSaisie.value + value;
  }

  // Gestion des événements pour les boutons numériques
  btnZero.addEventListener("click", function () {
    handleButtonClick("0");
    affichageOperation.innerHTML += "0";
  });

  btnOne.addEventListener("click", function () {
    handleButtonClick("1");
    affichageOperation.innerHTML += "1";
  });

  btnTwo.addEventListener("click", function () {
    handleButtonClick("2");
    affichageOperation.innerHTML += "2";
  });

  btnThree.addEventListener("click", function () {
    handleButtonClick("3");
    affichageOperation.innerHTML += "3";
  });

  btnFour.addEventListener("click", function () {
    handleButtonClick("4");
    affichageOperation.innerHTML += "4";
  });

  btnFive.addEventListener("click", function () {
    handleButtonClick("5");
    affichageOperation.innerHTML += "5";
  });

  btnSix.addEventListener("click", function () {
    handleButtonClick("6");
    affichageOperation.innerHTML += "6";
  });

  btnSeven.addEventListener("click", function () {
    handleButtonClick("7");
    affichageOperation.innerHTML += "7";
  });

  btnHeight.addEventListener("click", function () {
    handleButtonClick("8");
    affichageOperation.innerHTML += "8";
  });

  btnNine.addEventListener("click", function () {
    handleButtonClick("9");
    affichageOperation.innerHTML += "9";
  });

  btnPoint.addEventListener("click", function () {
    zonesSaisie.value += ",";
    affichageOperation.innerHTML += ",";
  });

  btnPlus.addEventListener("click", function () {
    zonesSaisie.value += "+";
    affichageOperation.innerHTML += "+";
  });

  btnSoustraction.addEventListener("click", function () {
    zonesSaisie.value += "-";
    affichageOperation.innerHTML += "-";
  });

  btnDivision.addEventListener("click", function () {
    zonesSaisie.value += "/";
    affichageOperation.innerHTML += "/";
  });

  btnMultiplication.addEventListener("click", function () {
    zonesSaisie.value += "*";
    affichageOperation.innerHTML += "*";
  });

  btnEqual.addEventListener("click", function () {
    somme = eval(zonesSaisie.value);
    zonesSaisie.value = somme;
    affichageOperation.innerHTML = zonesSaisie.value;
  });
});
