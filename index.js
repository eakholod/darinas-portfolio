function sendMail(event){
    event.preventDefault();
    var params = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceId = "service_nunzfpk";
    const templateId = "template_w0wr80j";
    
    emailjs.send(serviceId, templateId, params).then((res) => {
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
    
    })
    
    .catch((err) => console.log(err));
}