let theCalender = document.querySelector('.calender');
const startDate = new Date();
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Display stored username on the dashboard
document.addEventListener('DOMContentLoaded', () => {
    const disName = document.querySelector('.disName'); // Selector for the username display
    const storedUsername = localStorage.getItem('username');

    if (disName && storedUsername) {
        disName.textContent = `Welcome, ${storedUsername}!`;
    }
});

// Loop through 14 days starting from today
for (let i = 0; i < 14; i++) {
    const currentDate = new Date(startDate); // Clone the start date
    currentDate.setDate(startDate.getDate() + i); // Add `i` days to the start date

    const dayName = days[currentDate.getDay()]; // Get the day name (e.g., 'Mon')
    const monthName = months[currentDate.getMonth()]; // Get the month name (e.g., 'January')
    const day = currentDate.getDate(); // Get the day number (e.g., '23')

    // Log the date for debugging
    console.log(`${dayName}, ${monthName} ${day}`);

    // Create a new div element to represent the date
    const displayDate = document.createElement('div');
    displayDate.classList.add('calenderClass'); // Add a class for styling
    displayDate.innerHTML = `
        <div class="innerCalenderDiv">
            <p>${day}</p>
            <p>${dayName}</p>
        </div>
    `;

    // Append the date element to the calendar container
    theCalender.appendChild(displayDate);
}

// Add click event listeners after all dates are added to the DOM
document.addEventListener('DOMContentLoaded', () => {
    const timeShow = document.querySelectorAll('.innerCalenderDiv'); // Select all date elements

    timeShow.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'activeDay' class from all elements
            timeShow.forEach(link => link.classList.remove('activeDay'));

            // Add 'activeDay' class to the clicked element
            item.classList.add('activeDay');
        });
    });
});
