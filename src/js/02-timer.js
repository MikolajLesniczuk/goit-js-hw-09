
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const Days = document.querySelector('[data-days]');
const Hours = document.querySelector('[data-hours]');
const Minutes = document.querySelector('[data-minutes]');
const Seconds = document.querySelector('[data-seconds]');
let timerId = null;
const input = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[data-start]');



function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
    // Remaining days
      const days = Math.floor(ms / day);
    // Remaining hours
      const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
      return { days, hours, minutes, seconds };
    }

const addLeadingZero = value => String(value).padStart(2, 0);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
   
     if (selectedDates[0] <= new Date()){
Notiflix.Notify.failure ('Please choose a date in the future')
startBtn.disabled=true;
return;
     }
     startBtn.disabled=false;


     const newTime = () => {
        const actually = new Date() ;
        const selectData = new Date(selectedDates[0])
        const differenceTimes = selectData-actually;
        const {days,hours,minutes,seconds} = convertMs(differenceTimes)
        Days.textContent = days;
        Hours.textContent = addLeadingZero(hours);
        Minutes.textContent = addLeadingZero(minutes);
        Seconds.textContent = addLeadingZero(seconds);
        
        if (
            Days.textContent === '0' &&
            Hours.textContent === '00' &&
            Minutes.textContent === '00' &&
            Seconds.textContent === '00'
          ) {
            Notiflix.Notify.success('It`s Over, Death is close ')
            clearInterval(timerId);
          }
        
        }

        const timeCountdown = () => {
            if (timerId) {
                clearInterval(timerId);
              }
             newTime();
            timerId= setInterval(newTime,1000)
            }


            startBtn.addEventListener('click', timeCountdown);

    },
  };
  

flatpickr(input,options)
 

