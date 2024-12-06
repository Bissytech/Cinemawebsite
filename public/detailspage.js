document.addEventListener('DOMContentLoaded', () => {
    const storedUsername = localStorage.getItem('username'); 
    const disName = document.querySelector('.disName'); 

    if (disName && storedUsername) {
      disName.textContent = `Welcome, ${storedUsername}!`;
    } else {
      console.warn('Username not found');
    }
    
    const theCalender = document.querySelector('.calender');
    const startDate = new Date();
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    for (let i = 0; i < 14; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
  
      const dayName = days[currentDate.getDay()];
      const monthName = months[currentDate.getMonth()];
      const day = currentDate.getDate();
  
      const displayDate = document.createElement('div');
      displayDate.classList.add('calenderClass');
      displayDate.innerHTML = `
        <div class="innerCalenderDiv">
            <p>${day}</p>
            <p>${dayName}</p>
        </div>
      `;
      theCalender.appendChild(displayDate);
    }
  
    e
    const timeShow = document.querySelectorAll('.innerCalenderDiv');
    timeShow.forEach(item => {
      item.addEventListener('click', () => {
        timeShow.forEach(link => link.classList.remove('activeDay'));
        item.classList.add('activeDay');
      });
    });
  });
  
