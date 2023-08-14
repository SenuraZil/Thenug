

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("details-form");
  const continueBtn = document.getElementById("continueBtn");

  // Load previously stored user data from localStorage
  const storedUserData = localStorage.getItem("userData");
  if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      form.fullName.value = userData.fullName;
      form.phone.value = userData.phone;
      form.phone.value = userData.phone;
      form.email.value = userData.email;
      form.confirmEmail.value = userData.confirmEmail;
      form.gender.value = userData.gender;
  }

  
  const summaryDate = localStorage.getItem("Sdate");
  const summaryTime = localStorage.getItem("sTime");
  const summaryDuration = localStorage.getItem("sDuration");
  const summaryTickets = localStorage.getItem("stickets");
  const summaryTotal = localStorage.getItem("summaryTotal");

  
  document.getElementById("Sdate").textContent = summaryDate || "-";
  document.getElementById("sTime").textContent = summaryTime || "-";
  document.getElementById("sDuration").textContent = summaryDuration || "-";
  document.getElementById("stickets").innerHTML = summaryTickets || "-";
  document.getElementById("summaryTotal").textContent = summaryTotal || "-";



      var input = document.querySelector("#phone");
      window.intlTelInput(input, {
          separateDialCode: true,
          excludeCountries: ["in", "il"],
          preferredCountries: ["ru", "jp", "pk", "no"]
      });


 






  form.addEventListener("input", () => {
      const isFormValid = form.checkValidity();
      continueBtn.disabled = !isFormValid;
  });

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Store user inputs in localStorage
      const formData = {
          fullName: form.fullName.value,
          phone: form.phone.value,
          phone: form.phone.value,
          email: form.email.value,
          confirmEmail: form.confirmEmail.value,
          gender: form.gender.value,
      };
      localStorage.setItem("userData", JSON.stringify(formData));
      localStorage.setItem("fullName", form.fullName.value); 
      localStorage.setItem("phone", form.phone.value); 
      localStorage.setItem("email", form.email.value); 
      localStorage.setItem("gender", form.gender.value); 

      document.addEventListener("DOMContentLoaded", () => {
  
});

      window.location.href = "paypage.html";
  });
});



