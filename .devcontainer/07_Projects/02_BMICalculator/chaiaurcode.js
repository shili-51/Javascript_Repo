const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{

  // by default when we press submit button values are sent to server, in this case we dont want values to be sent to server so we prevent default behaviour by writing e.preventDefault()
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);

    if(bmi < 18.6){
      results.innerHTML = `<span>${bmi} Under Weight = Less than 18.6</span>`;
    }
    else if(bmi >= 18.6 && bmi <=24.9){
      results.innerHTML = `<span>${bmi} Normal Range = 18.6 and 24.9</span>`;
    } else{
      results.innerHTML = `<span>${bmi} Overweight = Greater than 24.9</span>`;
    }
  }
})