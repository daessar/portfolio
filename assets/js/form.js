// FORM MESSAGE
var form = document.getElementById("form-contact");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("text__message");
  var message = document.getElementById("message_container");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      message.style.display = "block";
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      message.style.display = "block";
      message.style.border = "3px solid #red";
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
