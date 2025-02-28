document.addEventListener("DOMContentLoaded", function () {
    let daySelect = document.getElementById("day");
    let monthSelect = document.getElementById("month");
    let yearSelect = document.getElementById("year");

    // Populate days (1-31)
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }

    // Populate months (Jan-Dec)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months.forEach((month, index) => {
        let option = document.createElement("option");
        option.value = index + 1;
        option.text = month;
        monthSelect.appendChild(option);
    });

    // Populate years (2024-2030)
    for (let i = 2024; i <= 2030; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
});
