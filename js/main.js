var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
if (menuBtn) {
  const closeMenu = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  };

  menuBtn.onclick = function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
  };
  window.onclick = function (event) {
    if (event.target == menu) {
      closeMenu();
    }
  };

  const header = document.getElementById("header");
  if (header)
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 400) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
}

let popUpBtn = document.getElementById("popUpBtn");
if (popUpBtn) {
  let popUp = document.getElementById("popUp");
  let main = document.getElementById("main");
  let header = document.getElementById("header");
  popUpBtn.addEventListener("click", () => {
    popUpBtn.classList.toggle("active");
    main.classList.toggle("spacePopUp");
    header.classList.toggle("spacePopUp");
    popUp.classList.toggle("active");
  });
}

// const links = document.querySelectorAll(".links");
// const sections = document.querySelectorAll(".anchor");
// function changeLinkState() {
//   let index = sections.length;
//   while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
//   links.forEach((link) => link.classList.remove("active"));
//   links[index]?.classList.add("active");
// }
// links.forEach((e) => {
//   onLinkClick(e);
// });
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// window.onscroll = function () {
//   changeLinkState();
// };

///
///
///
///WOW JS
// new WOW().init({
//   boxClass: "wow",
// });





