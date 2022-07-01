const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const serviceLink = document.querySelector("main a");
  const serviceBlock = document.getElementById("service-block");

  const hadleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", hadleMenu);
  closeBtn.addEventListener("click", hadleMenu);

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (item) => {
      hadleMenu();
      item.preventDefault();
      const id = menuItem.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  serviceLink.addEventListener("click", (item) => {
    item.preventDefault();
    serviceBlock.scrollIntoView({
      behavior: "smooth",
    });
  });
};

export default menu;
