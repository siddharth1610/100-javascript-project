const input = document.querySelector("input");
const error = document.querySelector(".error");
const button = document.querySelector("#btn-generate");
const gallery = document.querySelector(".gallery");

const render = () => {
  let num = input.value;
  error.innerHTML = "";
  if (!num.match(/^[0-9]+$/)) {
    return (error.innerHTML = "Enter valid number");
  }
  if (parseInt(num > 100)) {
    return (error.innerHTML = "Number should be 0-99");
  }
  let allimages = "";
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${num}&page=10&order=Desc`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < num; i++) {
        allimages += `<img src=${data[i].url}>`;
      }
     gallery.innerHTML=allimages 
    });
    
};

button.addEventListener("click", render);
