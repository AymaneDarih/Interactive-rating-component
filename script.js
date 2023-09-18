"user:strict";
let globalBtn;
const btnAll = document.querySelectorAll(".number");
const submitBtn = document.querySelector(".submit");
const hideContent = document.querySelector(".content-1");
const displayContent = document.querySelector(".content-2");
const selectedBtn = document.querySelector(".selected");

btnAll.forEach((c) => {
  c.addEventListener("click", function () {
    btnAll.forEach((z) => {
      z.classList.remove("clicked");
    });

    c.classList.add("clicked");
    globalBtn = c.textContent;

    console.log(globalBtn);
  });
});

console.log(globalBtn);
submitBtn.addEventListener("click", function () {
  if (globalBtn == undefined) {
    alert("Your rating matters! it's required to choose a number out of 5");
  } else {
    hideContent.classList.add("hidden");
    displayContent.classList.remove("hidden");
    selectedBtn.textContent = `You selected ${globalBtn} out of 5`;
  }
});
