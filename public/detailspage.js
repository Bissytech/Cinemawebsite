
let theCalender = document.querySelector('.calender')
const startDate = new Date();
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
localStorage.getItem('username')

let disName = document.querySelector('.disName')
disName.innerHTML = ` Hello,
${username}
`
for (let i = 0; i < 14; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const dayName = days[currentDate.getDay()]; 
    const monthName = months[currentDate.getMonth()]; 
    const day = currentDate.getDate(); 
    console.log(`${dayName}, ${monthName} ${day}`);


  


const displayDate = document.createElement('div');
displayDate.classList.add('calenderClass');
displayDate.innerHTML = `
<div class="innerCalenderDiv">
    <p>${day}</p>
    <p>${dayName}</p>
</div>
`;
theCalender.appendChild(displayDate);
//I did this to ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    // I did this to select all elements with the "innerCalenderDiv" class
    const timeShow = document.querySelectorAll(".innerCalenderDiv");


    timeShow.forEach(item => {
        item.addEventListener("click", () => {
            // this will remove 'activeDay' class from all items
            timeShow.forEach(link => link.classList.remove("activeDay"));

            // this is is to add 'activeDay' class to the clicked item
            item.classList.add("activeDay");
        });
    });
});


}


