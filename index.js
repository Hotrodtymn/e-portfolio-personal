console.log("INDEX.JS IS LOADED");
// template_zepbzpv
// service_37vvo12
// user_CPDpNHh5-XGqxpOZ6

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".model__overlay--loading");
  const success = document.querySelector(".model__overlay--success");

  loading.classList.add("model__overlay--visible");

  emailjs
    .sendForm(
      "service_37vvo12",
      "template_zepbzpv",
      event.target,
      "CPDpNHh5-XGqxpOZ6",
    )
    .then(() => {
      loading.classList.remove("model__overlay--visible");
      success.classList.add("model__overlay--visible");

      setTimeout(() => {
        success.classList.remove("model__overlay--visible");
      }, 3000);
    })
    .catch((error) => {
      loading.classList.remove("model__overlay--visible");

      console.log("EmailJS error:", error);
      console.log("EmailJS error text:", error.text);

      alert(
        "The email is temporarily unavailable. Please contact me directly at Tomleebabb@gmail.com",
      );
    });
}

alert(
  "The email is temporarily unavailable. Please contact me directly at Tomleebabb@gmail.com",
);

let ismodelopen = false
Function togglemodel() {
  if (modelopen) {
    ismodelopen = false
    return document.body.classList.remove("model--open")
  }
  ismodelopen = !ismodelopen;
//Toggle Model
console.log{'togglemodel'}
document.body.classlist +=


}