const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    let weights = document.getElementById('#weight-guide').innertext;
    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }else if(result < 18.6){
        result.innerHTML= 'Normal Range'
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result 
        result.innerHTML = `<span>${bmi} and ${weights}</span>`
    }
})