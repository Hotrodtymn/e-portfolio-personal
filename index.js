console.log("INDEX.JS IS LOADED");
// template_zepbzpv
// service_37vvo12
// user_CPDpNHh5-XGqxpOZ6

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_37vvo12",
      "template_zepbzpv",
      event.target,
      "CPDpNHh5-XGqxpOZ6",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");

      // setTimeout(() => {
      //   success.classList.remove("modal__overlay--visible");
      // }, 3000);
    })
    .catch((error) => {
      loading.classList.remove("modal__overlay--visible");

      console.log("EmailJS error:", error);
      console.log("EmailJS error text:", error.text);

      alert(
        "The email is temporarily unavailable. Please contact me directly at Tomleebabb@gmail.com",
      );
    });
}

let ismodalopen = false;
function togglemodal() {
  if (ismodalopen) {
    ismodalopen = false;
    return document.body.classList.remove("modal--open");
  }
  ismodalopen = !ismodalopen;
  //Toggle modal
  console.log("togglemodal");
  document.body.classList += " modal--open";
}
