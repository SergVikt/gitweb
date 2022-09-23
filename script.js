let sizeSetting = document.querySelector(".size-setting");
let longread = document.querySelector(".longread");
let pixels = document.querySelector(".pixels");

sizeSetting.oninput = function () {
  pixels.textContent = sizeSetting.value;
  longread.style.fontSize = "small";
};

let textRandom = document.querySelector(".textRandom");
textRandom.textContent = "hello world!";
console.log("test for git");
