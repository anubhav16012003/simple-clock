const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    console.log('Form submitted');
    e.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const results = document.querySelector('#results');

    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    if (heightInput.value === '' || isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height: ${heightInput.value}`;
    } else if (weightInput.value === '' || isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight: ${weightInput.value}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }

    // check bmi ranges
    if(bmi<20){
        results.innerHTML += `You are under-weight`;
    }
    else if(20<bmi<25){
        results.innerHTML += `OK report`;
    }
    else{
        results.innerHTML += `bhenkelode ess vajan ku km krle`
    }
});
