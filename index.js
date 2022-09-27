function sendMail(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  var params = {
    name: fullName,
    email: email,
    message: message,
  };
  const serviceId = "service_nunzfpk";
  const templateId = "template_w0wr80j";

  if (fullName.length < 1) {
    alert("Please provide your full name ");
  } else if (!email.includes("@")) {
    alert("Please provide a valid email");
  } else if (message.length < 5) {
    alert("Please leave a valid message");
  } else {
    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Form has been submitted");
        console.log(res);
      })

      .catch((err) => console.log(err));
  }
}
