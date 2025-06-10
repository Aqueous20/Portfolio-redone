let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

async function contact(event) {
  event.preventDefault();
  loading.classList += " modal__overlay--visible";

  try {
    await emailjs.sendForm(
      `service_h347dtm`,
      `template_x7lefb21`,
      event.target,
      `ng1O_z-aVjtL9YlYq`
    );
    loading.classList.remove("modal__overlay--visible"),
      (success.classList += " modal__overlay--visible");
  } catch {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please contact me at coreyandersonjm101@gmail.com"
    );
  }
}

function toggleModal() {
  const form = document.getElementById("contact__form");
  if (isModalOpen) {
    isModalOpen = false;
    document.body.classList.remove("modal--open");
    if (form) form.reset();
    if (loading) loading.classList.remove("modal__overlay--visible");
    if (success) success.classList.remove("modal__overlay--visible");
    return;
  }
  isModalOpen = true;
  document.body.classList.add("modal--open");
}
