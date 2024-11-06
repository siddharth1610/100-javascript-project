const button = document.querySelector("button");
const input = document.querySelector("input");
const display = document.querySelector("h2");

const result = () => {
  let userDate = new Date(input.value);
  let realDate = new Date();

  let year = realDate.getFullYear() - userDate.getFullYear();
  let month = realDate.getMonth() - userDate.getMonth();
  let day = realDate.getDay() - userDate.getDay();
  if (realDate.getMonth() < userDate.getMonth() ||
    (realDate.getMonth() === userDate.getMonth() &&
      realDate.getDate() < userDate.getDate())
  ) {
    year--;
    month = 12 + realDate.getMonth() - userDate.getMonth();
    day = realDate.getDate() - userDate.getDate();
  }
  display.innerHTML=`your age is ${year}years, ${month}months, ${day}days `
};

button.addEventListener("click", result);
