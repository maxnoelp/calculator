const resultat = document.querySelector(".display-input");
const outputDis = document.querySelector(".display-output");
const calcResult = document.querySelector(".result");
const deleteBtn = document.querySelector(".delete");
const deleteAllBtn = document.querySelector(".delete-all");
const brackets = document.querySelector(".brackets");
let openBracket = true;

document.querySelectorAll(".numbers").forEach((element) => {
  element.addEventListener("click", function () {
    resultat.innerText += element.innerText;
  });
});

calcResult.addEventListener("click", function () {
  outputDis.innerText = eval(resultat.innerText);
});

deleteBtn.addEventListener("click", function () {
  const delBtn = resultat.innerText;

  if (delBtn.length < 1) {
    return;
  }
  resultat.innerText = delBtn.substring(0, delBtn.length - 1);
});

deleteAllBtn.addEventListener("click", function () {
  resultat.innerText = "";
  outputDis.innerText = "";

  openBracket = true;
});

brackets.addEventListener("click", function () {
  if (openBracket) {
    resultat.innerText += "(";
  } else {
    resultat.innerText += ")";
  }
  openBracket = !openBracket;
});
