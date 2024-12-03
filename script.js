let newDiv = document.createElement("div");

let div = prompt('Ismingizni yozing')

newDiv.textContent = `${div}`;

newDiv.style.fontSize = "80px";
newDiv.style.color = "yellow";
newDiv.style.textAlign = "center"
newDiv.style.marginTop = "300px"
document.body.style.backgroundColor = "blue"

document.body.appendChild(newDiv);
