/** Exercise 03 - Form **/

const validateForm = (name, email) => {
  removeNodes();

  // Validating name
  let nameErr = "";
  if(name.length === 0){
    nameErr = "Please enter name";
  }
  if (nameErr) {
    const nameErrorMessage= document.createElement("p");
    nameErrorMessage.setAttribute("id", "nameErr");
    nameErrorMessage.classList.add("mt-2", "mb-0", "text-danger");
    nameErrorMessage.innerText = nameErr;
    document
      .getElementById("name")
      .insertAdjacentElement("afterend", nameErrorMessage);
  }

  // Validating email
  let emailErr ="";
  var emailID = document.getElementById("email");
  if(!emailID.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)){
    
    emailErr =  "Please enter a valid email address";
  }
 
  if (emailErr) {
    const emailErrorMessage= document.createElement("p");
    emailErrorMessage.setAttribute("id", "emailErr");
    emailErrorMessage.classList.add("mt-2", "mb-0", "text-danger");
    emailErrorMessage.innerText = emailErr;
    document
      .getElementById("email")
      .insertAdjacentElement("afterend", emailErrorMessage);
  }
  
  if (nameErr) {
    return false;
  }else if(emailErr){
    return false;
  }else{
    return true;
  }

};

const formSubmit = () => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;
  const newsletter = document.getElementById("newsletter").checked;

  if (validateForm(name, email)) {
    console.log("============== Form Submission ==============");
    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Feedback :", feedback || "No feedback was submitted.");
    console.log(
      "Newsletter :",
      newsletter
        ? "Yes, I would like to join the newsletter."
        : "No, thank you."
    );
    alert("Details Submitted!!");
  }
};

// Resetting form
const resetElement= (element) => element && element.parentNode.removeChild(element);
const removeNodes = () => {
  resetElement(document.getElementById("nameErr"));
  resetElement(document.getElementById("emailErr"));
};