document.addEventListener("DOMContentLoaded", function () {
    const storedSname = localStorage.getItem("fullName");
    const storedSdate = localStorage.getItem("Sdate");
    const storedsTime = localStorage.getItem("sTime");
    const storedsDuration = localStorage.getItem("sDuration");
    const storedsmobile = localStorage.getItem("phone");
    const storedsemail = localStorage.getItem("email");
    const storedsgender = localStorage.getItem("gender");
    const storedstickets = localStorage.getItem("stickets");
    const storedsCharges = localStorage.getItem("summaryTotal");

    if (storedSname && storedSdate && storedsTime && storedsDuration && storedsmobile && storedsemail && storedsgender && storedstickets && storedsCharges) {
        document.getElementById("Sname").textContent = storedSname;
        document.getElementById("Sdate").textContent = storedSdate;
        document.getElementById("sTime").textContent = storedsTime;
        document.getElementById("sDuration").textContent = storedsDuration;
        document.getElementById("smobile").textContent = storedsmobile;
        document.getElementById("semail").textContent = storedsemail;
        document.getElementById("sgender").textContent = storedsgender;
        document.getElementById("stickets").innerHTML = storedstickets;
        document.getElementById("sCharges").textContent = storedsCharges;
        document.getElementById("summaryTotal").textContent = storedsCharges;
    }
});
