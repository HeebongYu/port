document.body.onload = addElement;

function addElement() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("ver.2 2022.05.20.2'");
  newDiv.appendChild(newContent);
  newDiv.classList.add("version");

  document.body.insertBefore(newDiv, document.body.firstChild);
}
