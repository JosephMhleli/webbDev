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
  xhr.open("POST", "send.php",true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      alert("Email sent successfully!");
      form.reset();
    } else {
      alert("Error sending email.");
    }
  };
  xhr.send(formData);
});
