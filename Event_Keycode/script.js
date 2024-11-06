const insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class='key'>
<h2>event.key</h2>
${e.key===" "?'space':e.key}
    </div>
    <div class='key'>
    <h2>event.keycode</h2>
    ${e.keyCode}
    </div>`;
});
