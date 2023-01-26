function Toggle_Burger_Menu() {
  let burger = document.querySelector(".burger-menu");
  let menu = document.querySelector(".menu");
  let liens = document.querySelectorAll(".menu a");

  //   console.log(liens);

  burger.addEventListener("click", () => {
    menu.classList.toggle("d-none");
    burger.classList.toggle("active");
  });

  liens.forEach((element) => {
    element.addEventListener("click", () => {
      menu.classList.toggle("d-none");
      burger.classList.toggle("active");
    });
  });
}

Toggle_Burger_Menu();
