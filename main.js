const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData();
  formData.append("name", nameInput.value);
  formData.append("email", emailInput.value);
  formData.append("message", messageInput.value);
  
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php",true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      console.log(response);
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Error sending email.");
    }
  };
  
  xhr.send(formData);
});
