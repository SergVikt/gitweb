let sizeSetting = document.querySelector(".size-setting");
let longread = document.querySelector(".longread");
let pixels = document.querySelector(".pixels");

sizeSetting.oninput = function () {
  pixels.textContent = sizeSetting.value;
  longread.style.fontSize = "small";
};

let textOther = document.querySelector(".text-other");
textOther.textContent += " add javascript";
console.log("test for git");
