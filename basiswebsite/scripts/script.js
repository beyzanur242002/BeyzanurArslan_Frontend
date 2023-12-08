
var openButton = document.querySelector("header nav button:nth-of-type(1)");

openButton.onclick = openMenu;


function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("header nav:nth-of-type(1)");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}



var sluitButton = document.querySelector("header > nav:nth-of-type(1) ul button");

sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
    var deNav = document.querySelector("header > nav:nth-of-type(1)");
    deNav.classList.remove("toonMenu");
}




/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("header nav");
    deNav.classList.remove("toonMenu");
  }
}