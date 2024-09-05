// console.log("Form");

const formData = {
  email: "",
  message: ""
};


function saveToLocalStorage() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}


function populateForm() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}


populateForm();


const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (formData.hasOwnProperty(name)) {
    formData[name] = value;
    saveToLocalStorage();
  }
});


form.addEventListener('submit', event => {
  event.preventDefault();
  
  const { email, message } = formData;

  if (email.trim() === "" || message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  
  localStorage.removeItem("feedback-form-state");
  Object.keys(formData).forEach(key => formData[key] = "");
  form.reset();
});