//Variables
const nombre = document.getElementById("name");
var card = document.getElementById("card_number");
var mm = document.getElementById("month");
var yy = document.getElementById("year");
var cvc = document.getElementById("cvc");
var errores = document.getElementById("warnings");
var errores_2 = document.getElementById("warnings_2");
var errores_3 = document.getElementById("warnings_3");
var errores_4 = document.getElementById("warnings_4");
var nom_card = document.getElementById("nom");
//Capturar el div de thank you para establecerlo despues como disable
var Thankyouu = document.getElementById("Thankyou");
//Variable para capturar el id del boton
var continueButton = document.getElementById("continue_btn");
//Variable para verificar que este lleno el formulario
//var piston = false;

//Evento de enviar
Formulario.addEventListener("submit", (e) => {
  var decition = 0;
  var TotalValidation = 7;
  e.preventDefault();

  if (card.value.length < 19 && card.value.length >= 0) {
    errores.innerHTML = "Can't be blank";
    card.style.borderColor = "#ff0000";
  } else {
    errores.innerHTML = "";
    decition++;
  }

  if (nombre.value == "") {
    nombre.style.borderColor = "#ff0000";
  } else {
    nombre.style.borderColor = "";
    decition++;
  }

  if (mm.value.length < 2) {
    errores_2.innerHTML = "Can't be blank";
    mm.style.borderColor = "#ff0000";
  } else {
    errores_2.innerHTML = "";
    mm.style.borderColor = "";
    decition++;
  }

  if (yy.value.length < 2) {
    errores_3.innerHTML = "Can't be blank";
    yy.style.borderColor = "#ff0000";
  } else {
    errores_3.innerHTML = "";
    yy.style.borderColor = "";
    decition++;
  }

  if (cvc.value.length < 3) {
    errores_4.innerHTML = "Can't be blank";
    cvc.style.borderColor = "#ff0000";
  } else {
    errores_4.innerHTML = "";
    cvc.style.borderColor = "";
    decition++;
  }
  if (month.value > 12 || month.value == 00) {
    mm.style.borderColor = "#ff0000";
  } else {
    decition++;
  }

  if (yy.value < 23 || yy.value == 0) {
    yy.style.borderColor = "#ff0000";
  } else {
    yy.style.borderColor = "";
    decition++;
  }
  // Condicion para mostrar el Thank you!
  if (TotalValidation == decition) {
    Formulario.classList.add("disable");
    Thankyouu.classList.remove("disable");
  }
});

//Funcion para prohibir el uso de texto

function valideKey(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;

  if (code == 8) {
    // backspace.
    return true;
  } else if (code >= 48 && code <= 57) {
    // is a number.
    return true;
  } else {
    // other keys.
    return false;
  }
}

//Funcion para prohibir el uso de numeros
function valideKey_number(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;

  if (code == 8) {
    // backspace.
    return true;
  } else if (code >= 65 && code <= 90) {
    // is a letter.
    return true;
  } else if (code >= 97 && code <= 122) {
    // is a letter.
    return true;
  } else if (code == 32) {
    // is a space.
    return true;
  } else {
    // other keys.
    return false;
  }
}

//Funcion para reemplazar texto en la tarjeta
Formulario.name.addEventListener("input", (e) => {
  nom.innerHTML = e.target.value;

  if (nom.innerHTML == "") {
    nom.innerHTML = "JANE APPLESEED";
  }
});

//Captura de los numeros de la terjeta
var replace_number = document.querySelector("#card_number");

replace_number.addEventListener("input", (e) => {
  console.log(e.target.value);
  numbers.innerHTML = e.target.value;

  if (numbers.innerHTML == "") {
    numbers.innerHTML = "0000 0000 0000 0000";
  }
});

//Eventos del input del mes
month.addEventListener("input", (e) => {
  console.log(e.target.value);
  var letra = e.target.value;

  mes_.innerHTML = e.target.value + "/";

  if (month.value == "") {
    mes_.innerHTML = "00/";
  }

  if (month.value == letra) {
    month.style.borderColor = "";
    errores_2.innerHTML = "";
  }

  if (month.value > 12 || month.value == 00) {
    console.log("valor no admitido");
    errores_2.innerHTML = "invalid month";
  }

  if (month.value == "") {
    errores_2.innerHTML = "";
  }
});

//Eventos del input del año
year.addEventListener("input", (e) => {
  console.log(e.target.value);
  var letra = e.target.value;

  year_.innerHTML = e.target.value;

  if (year_.innerHTML == "") {
    year_.innerHTML = "00";
  }

  if (year.value == letra) {
    year.style.borderColor = "";
    errores_3.innerHTML = "";
  }
});

//Eventos del input del cvc
cvc.addEventListener("input", (e) => {
  console.log(e.target.value);
  var letra = e.target.value;

  c_vc.innerHTML = e.target.value;

  if (c_vc.innerHTML == "") {
    c_vc.innerHTML = "000";
  }

  if (cvc.value == letra) {
    cvc.style.borderColor = "";
    errores_4.innerHTML = "";
  }
});

//Eventos del input de numeros con una expresion regular y que de un espacio cada cuatro numeros
replace_number.addEventListener("input", (e) => {
  var inputValue = event.target.value;
  console.log(inputValue);

  var regExpres = /[A-z]/g;
  if (regExpres.test(replace_number.value)) {
    errores.innerHTML = "Wrong format, numbers only";
    card.style.borderColor = "#ff0000";
  } else {
    replace_number.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
    errores.innerHTML = "";
    card.style.borderColor = "";
  }
});

//Eventos del input del nombre
nombre.addEventListener("input", (e) => {
  console.log(e.target.value);
  var letra = e.target.value;

  if (nombre.value == letra) {
    nombre.style.borderColor = "";
  }
});

//Evento para resetear el contenido de los input y tarjeta
continueButton.addEventListener("click", (e) => {
  Formulario.classList.remove("disable");
  Thankyouu.classList.add("disable");
  Formulario.reset();
  nom.innerHTML = "JANE APPLESEED";
  numbers.innerHTML = "0000 0000 0000 0000";
  mes_.innerHTML = "00/";
  year_.innerHTML = "00";
  c_vc.innerHTML = "000";
});
