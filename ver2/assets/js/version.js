document.body.onload = addElement;

function addElement() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("ver.2.0524");
  newDiv.appendChild(newContent);
  newDiv.classList.add("version");

  document.body.insertBefore(newDiv, document.body.firstChild);
}
