// 'use strict';

const txt = document.querySelector("#txt-input");
const btntrans = document.querySelector("#btn-translate");
const divOut = document.querySelector("#output");
const btnclear = document.querySelector("#btn-clear");

btntrans.addEventListener("click", function () {
  divOut.innerText = txt.value;
});

btnclear.addEventListener("click", function () {
  divOut.innerText = "";
  txt.value = "";
});
