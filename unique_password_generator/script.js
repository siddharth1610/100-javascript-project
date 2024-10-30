const button = document.querySelector("button");
const input = document.querySelector("input");

const utilityfunction = (length) => {
  return Math.floor(Math.random() * length);
};

const paschar = ["a", "b", "h", 6, 4, 3, "@", "^", "*", "v", "i", 5, 0];

const perform = () => {

  let password = "";
  for (let i = 0; i < 8; i++) {
    password += paschar[utilityfunction(paschar.length)];
  }
  //console.log(password);
  input.value = password;
};

button.addEventListener("click", perform);


// button.addEventListener("click", () => {
//   const paschar = ["a", "b", "h", 6, 4, 3, "@", "^", "*", "v", "i", 5, 0];
//   let password = "";
//   for (let i = 0; i < 8; i++) {
//     password += paschar[utilityfunction(paschar.length)];
//   }
//   //console.log(password);

//   input.value = password;
// });