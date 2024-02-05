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
    zonesSaisie.value = value;
  }

  function handleButtonClick(value) {
    if (zonesSaisie.value === "0") {
      zonesSaisie.value = value;
    } else {
      zonesSaisie.value + value;
    }
    // Si la valeur actuelle est "0", remplacez-la par la nouvelle valeur
    // Sinon, ajoutez la nouvelle valeur à la fin de la valeur existante
    zonesSaisie.value =
      zonesSaisie.value === "0" ? value : zonesSaisie.value + value;
  }

  btnPlus.addEventListener("click", function () {
    zonesSaisie.value = "+";
  });

  btnSoustraction.addEventListener("click", function () {
    zonesSaisie.value = "-";
  });

  btnDivision.addEventListener("click", function () {
    zonesSaisie.value = "/";
  });

  btnMultiplication.addEventListener("click", function () {
    zonesSaisie.value = "*";
  });

  btnZero.addEventListener("click", function () {
    handleButtonClick("0");
  });

  btnOne.addEventListener("click", function () {
    handleButtonClick("1");
  });

  btnTwo.addEventListener("click", function () {
    handleButtonClick("2");
  });

  btnThree.addEventListener("click", function () {
    handleButtonClick("3");
  });

  btnFour.addEventListener("click", function () {
    handleButtonClick("4");
  });

  btnFive.addEventListener("click", function () {
    handleButtonClick("5");
  });

  btnSix.addEventListener("click", function () {
    handleButtonClick("6");
  });

  btnSeven.addEventListener("click", function () {
    handleButtonClick("7");
  });

  btnHeight.addEventListener("click", function () {
    handleButtonClick("8");
  });

  btnNine.addEventListener("click", function () {
    handleButtonClick("9");
  });

  zonesSaisie.value = +value;
});

/* JavaScript */
