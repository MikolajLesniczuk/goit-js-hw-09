import Notiflix from 'notiflix';

const form = document.querySelector('.form')
let delayFromInput = null;
let stepFromInput = null;
let amountFromInput = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitHandler = event => {
event.preventDefault();
const {delay, step, amount} = event.currentTarget;
 
delayFromInput = Number(delay.value);
stepFromInput = Number(step.value);
amountFromInput = Number(amount.value);

for(let i = 1 ; i<= amountFromInput; i++){

  createPromise(i, delayFromInput)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  delayFromInput += stepFromInput
}

event.currentTarget.reset();

} 



form.addEventListener('submit',submitHandler)








  