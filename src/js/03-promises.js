const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const buttonSubmit = document.querySelector('button[type="submit"]');

const runFunction = e => {
  e.preventDefault();

  let delayValue = inputDelay.valueAsNumber;
  let stepValue = inputStep.valueAsNumber;
  let amountValue = inputAmount.valueAsNumber;

  function createPromise(position, delayValue) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          console.log(`✅ Fulfilled promise ${position} in ${delayValue}ms`);
        } else {
          console.log(`❌ Rejected promise ${position} in ${delayValue}ms`);
        }
      }, delayValue);
    });
  }

  for (let i = 1; i <= amountValue; i++) {
    let position = i;

    createPromise(position, delayValue)
      .then(value => {
        console.log(`✅ Fulfilled promise ${position - 1} in ${delayValue}ms`);
      })
      .catch(err => {
        console.log(`❌ Rejected promise ${position - 1} in ${delayValue}ms`);
      });
    delayValue = delayValue + stepValue;
    position++;
  }
};

buttonSubmit.addEventListener('click', runFunction);