const txt = document.querySelector("#txt-input");
const btntrans = document.querySelector("#btn-translate");
const divOut = document.querySelector("#output");
const btnclear = document.querySelector("#btn-clear");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function TranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured ", error);
  alert("Something is wrong with the server, try again later :( ");
}

btntrans.addEventListener("click", function () {
  const txtInput = txt.value;

  fetch(TranslationURL(txtInput))
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      divOut.innerText = translatedTxt;
    })
    .catch(errorHandler);
});

btnclear.addEventListener("click", function () {
  divOut.innerText = "";
  txt.value = "";
});
