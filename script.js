// 'use strict';

const txt = document.querySelector("#txt-input");
const btntrans = document.querySelector("#btn-translate");
const divOut = document.querySelector("#output");
const btnclear = document.querySelector("#btn-clear");

const serverURL = "https://api.saurabhchirde.repl.co/translate/yoda.json";

function TranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

btntrans.addEventListener("click", function () {
  const txtInput = txt.value;

  fetch(TranslationURL(txtInput))
    .then(response => response.json())
    .then(jsontxt => console.log(jsontxt.contents.translated));

  // divOut.innerText = txt.value;
});

btnclear.addEventListener("click", function () {
  divOut.innerText = "";
  txt.value = "";
});
