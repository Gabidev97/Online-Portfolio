function openNav() {
 var Menu = document.getElementById("navigation");
  if (Menu.className === "navigation") {
      Menu.className += " menujs";
  } else {
      Menu.className = "navigation";
  }
}