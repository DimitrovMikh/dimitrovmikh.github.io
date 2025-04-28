// Image Changer Code
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/logo.png") {
    myImage.setAttribute("src", "img/logo2.png");
  } else {
    myImage.setAttribute("src", "img/logo.png");
  }
});

// User Change Button
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Bitte gib deinen Namen ein.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Herzlich Willkommen, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Willkommen zurück, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
  });
  
  