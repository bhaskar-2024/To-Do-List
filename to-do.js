const ul = document.querySelector(".todo");
const add = document.querySelector(".add");

function add_todo(todoText) {
  if (todoText === "") {
    alert("You entered an empty task!!!");
    return;
  }
  const listdiv = document.createElement("div");
  const li = document.createElement("li");
  li.innerText = `${todoText}`;
  const button = document.createElement("button");

  button.innerText = "Done";
  const spant = document.createElement("span");
  const spanb = document.createElement("span");
  spant.appendChild(li);
  spanb.appendChild(button);
  spanb.classList.add("listbutton");
  spant.classList.add("listtext");
  listdiv.appendChild(spant);
  listdiv.appendChild(spanb);
  listdiv.classList.add("listItems");
  ul.appendChild(listdiv);
}

add.addEventListener("click", function (e) {
  const input = document.querySelector("input");

  add_todo(input.value);

  input.value = "";
});
document.querySelector("input").addEventListener("keyup", function (e) {
  const input = document.querySelector("input");

  if (e.keyCode == 13) {
    add_todo(input.value);
    input.value = "";
  }
});

ul.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "BUTTON") {
    evt.target.parentElement.parentElement.remove();
  }
});
