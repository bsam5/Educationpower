// menu
const menu = document.getElementById("menu"),
  navBar = document.getElementById("navbar"),
  transparent = document.getElementById("transparent");

const closeNavBar = () => {
  navBar.classList.remove("opened");
  navBar.style.transform = "translateX(214px)";
  transparent.style.display = "none";
};

const openNavBar = () => {
  navBar.classList.add("opened");
  navBar.style.transform = "translateX(0px)";
  transparent.style.display = "block";
};

menu.onclick = () =>
  !navBar.classList.contains("opened") ? openNavBar() : closeNavBar();

transparent.onclick = closeNavBar;
