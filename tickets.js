





document.addEventListener("DOMContentLoaded", function () {
    
    function calculateTotalPayable() {
      
      const slAdultTickets = parseInt(document.getElementById("slAdult").value) || 0;
      const slChildTickets = parseInt(document.getElementById("slChild").value) || 0;
      const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdult").value) || 0;
      const foreignerChildTickets = parseInt(document.getElementById("foreignerChild").value) || 0;
      const infantTickets = parseInt(document.getElementById("infant").value) || 0;
  
      
      const selectedTimeSlot = document.getElementById("timeSlot").value;
      const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06";
  
      
      const slAdultNormalCharge = 4;
      const slAdultPeakCharge = 6;
      const slChildNormalCharge = 2;
      const slChildPeakCharge = 3;
      const foreignerAdultNormalCharge = 10;
      const foreignerAdultPeakCharge = 13;
      const foreignerChildNormalCharge = 5;
      const foreignerChildPeakCharge = 8;
  
      
      const totalPayable =
        slAdultTickets * (isPeakHour ? slAdultPeakCharge : slAdultNormalCharge) +
        slChildTickets * (isPeakHour ? slChildPeakCharge : slChildNormalCharge) +
        foreignerAdultTickets * (isPeakHour ? foreignerAdultPeakCharge : foreignerAdultNormalCharge) +
        foreignerChildTickets * (isPeakHour ? foreignerChildPeakCharge : foreignerChildNormalCharge);
  
      return totalPayable;
    }



    document.addEventListener("DOMContentLoaded", function () {
      
      function downloadSummary() {
          const summaryText = [
              "Full Name: " + storedSname,
              "Date: " + storedSdate,
              "Time: " + storedsTime,
              "Duration: " + storedsDuration,
              "Mobile no: " + storedsmobile,
              "Email address: " + storedsemail,
              "Gender: " + storedsgender,
              "Tickets: " + storedstickets,
              "Charges: " + storedsCharges,
              "Total amount: " + storedsCharges
          ].join('\n');
  
          const blob = new Blob([summaryText], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          
          const a = document.createElement('a');
          a.href = url;
          a.download = 'summary.txt';
          a.textContent = 'Download Summary';
          
          document.body.appendChild(a);
          a.click();
          
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
      }
  
      
      const downloadButton = document.getElementById('downloadButton');
      downloadButton.addEventListener('click', downloadSummary);
  });
  


   









  



    
    function updateSummary() {
      const visitDate = document.getElementById("visitDate").value;
      const selectedTimeSlot = document.getElementById("timeSlot").value;
      const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06";
  
      const SdateCell = document.getElementById("Sdate");
      const sTimeCell = document.getElementById("sTime");
      const sDurationCell = document.getElementById("sDuration");
      const sticketsCell = document.getElementById("stickets");
      const summaryTotalCell = document.getElementById("summaryTotal");
  
      SdateCell.textContent = visitDate;
      sTimeCell.textContent = selectedTimeSlot;
      sDurationCell.textContent = `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`;
  
      const slAdultTickets = parseInt(document.getElementById("slAdult").value) || 0;
      const slChildTickets = parseInt(document.getElementById("slChild").value) || 0;
      const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdult").value) || 0;
      const foreignerChildTickets = parseInt(document.getElementById("foreignerChild").value) || 0;
      const infantTickets = parseInt(document.getElementById("infant").value) || 0;
  
      sticketsCell.innerHTML = `
        ${slAdultTickets} SL Adult $${slAdultTickets * (isPeakHour ? 6 : 4)}<br>
        ${slChildTickets} SL Child $${slChildTickets * (isPeakHour ? 3 : 2)}<br>
        ${foreignerAdultTickets} Foreigner Adult $${foreignerAdultTickets * (isPeakHour ? 13 : 10)}<br>
        ${foreignerChildTickets} Foreigner Child $${foreignerChildTickets * (isPeakHour ? 8 : 5)}<br>
        ${infantTickets} Infant Free
      `;
  
      const totalPayable = calculateTotalPayable();
      summaryTotalCell.textContent = `$${totalPayable}`;
  
      // Store the summary table values in the browser's local storage
      localStorage.setItem("Sdate", visitDate);
      localStorage.setItem("sTime", selectedTimeSlot);
      localStorage.setItem("sDuration", `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`);
      localStorage.setItem("stickets", sticketsCell.innerHTML);
      localStorage.setItem("summaryTotal", `$${totalPayable}`);
  
      // Enable or disable the "Continue with purchase" button based on user inputs
      const continueButton = document.getElementById("continueButton");
      continueButton.disabled = totalPayable <= 0;
    }
  
    // Retrieve data from local storage and update the summary table
    const storedSdate = localStorage.getItem("Sdate");
    const storedsTime = localStorage.getItem("sTime");
    const storedsDuration = localStorage.getItem("sDuration");
    const storedstickets = localStorage.getItem("stickets");
    const storedSummaryTotal = localStorage.getItem("summaryTotal");
  
    if (storedSdate && storedsTime && storedsDuration && storedstickets && storedSummaryTotal) {
      document.getElementById("Sdate").textContent = storedSdate;
      document.getElementById("sTime").textContent = storedsTime;
      document.getElementById("sDuration").textContent = storedsDuration;
      document.getElementById("stickets").innerHTML = storedstickets;
      document.getElementById("summaryTotal").textContent = storedSummaryTotal;
    }
  
    // Add event listeners to the input elements
    document.getElementById("visitDate").addEventListener("change", updateSummary);
    document.getElementById("timeSlot").addEventListener("change", updateSummary);
    document.getElementById("slAdult").addEventListener("input", updateSummary);
    document.getElementById("slChild").addEventListener("input", updateSummary);
    document.getElementById("foreignerAdult").addEventListener("input", updateSummary);
    document.getElementById("foreignerChild").addEventListener("input", updateSummary);
    document.getElementById("infant").addEventListener("input", updateSummary);
  
    // Add event listeners to increment and decrement buttons
    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");
  
    function handleIncrement(event) {
      const inputElement = event.target.parentElement.querySelector("input");
      inputElement.value = parseInt(inputElement.value) + 1;
      updateSummary();
    }
  
    function handleDecrement(event) {
      const inputElement = event.target.parentElement.querySelector("input");
      const currentValue = parseInt(inputElement.value);
      inputElement.value = currentValue > 0 ? currentValue - 1 : 0;
      updateSummary();
    }
  
    plusButtons.forEach((button) => {
      button.addEventListener("click", handleIncrement);
    });
  
    minusButtons.forEach((button) => {
      button.addEventListener("click", handleDecrement);
    });
  
    
    updateSummary();
  });
  




  const storedSdate = localStorage.getItem("Sdate");
  const storedsTime = localStorage.getItem("sTime");
  const storedsDuration = localStorage.getItem("sDuration");
  const storedstickets = localStorage.getItem("stickets");
  const storedSummaryTotal = localStorage.getItem("summaryTotal");

  if (storedSdate && storedsTime && storedsDuration && storedstickets && storedSummaryTotal) {
    document.getElementById("Sdate").textContent = storedSdate;
    document.getElementById("sTime").textContent = storedsTime;
    document.getElementById("sDuration").textContent = storedsDuration;
    document.getElementById("stickets").innerHTML = storedstickets;
    document.getElementById("summaryTotal").textContent = storedSummaryTotal;
  }

  // Add click event listener to the "Purchase" button
  document.getElementById("cButton").addEventListener("click", function() {
    // Redirect to the next page ("detailed.html")
    window.location.href = "detail.html";
  });
  


 