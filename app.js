// const checkBox = document.querySelector('input[name="theme"]');
// let htmlElement = document.documentElement;

// checkBox.addEventListener("click", function () {
//   if (checkBox.checked) {
//     htmlElement.classList.toggle("transition");
//     htmlElement.setAttribute("data-theme", "dark");
//   } else {
//     htmlElement.classList.toggle("transition");
//     htmlElement.setAttribute("data-theme", "light");
//   }
// });

const checkBox = document.querySelector("input[name='theme']");
/* when you're selecting the HTML element and an attribute, the attribute goes into brackets after the element -- keep in mind this is a big question you had before */
let htmlElement = document.documentElement;

// console.log(htmlElement);
// console.log(checkBox);

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "light");
  }
});
