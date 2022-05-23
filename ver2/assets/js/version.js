document.body.onload = addElement;

function addElement() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("ver.2.0523.12");
  newDiv.appendChild(newContent);
  newDiv.classList.add("version");

  document.body.insertBefore(newDiv, document.body.firstChild);
}
