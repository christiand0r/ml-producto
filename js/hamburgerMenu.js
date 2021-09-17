const d = document;

const buttonTrigger = (button, menu) => {
  const $btn = d.querySelector(button),
    $menu = d.querySelector(menu);

  d.addEventListener("click", (e) => {
    if (e.target.matches(button) || e.target.matches(`${button} *`)) {
      $menu.classList.toggle("active");

      $btn.classList.toggle("is-active");
    }
  });
};

export default buttonTrigger;
