//making the bmi function
function calculateBmi(){
    let weight = document.getElementById('Weight').value
    let height = document.getElementById('Height').value
    let bmi = (weight / ((height * height) /10000)).toFixed(2)



    document.getElementById('display').innerHTML = `Your BMI is : ${bmi}`

    if (bmi <= 24.9) {
        document.getElementById('message').innerHTML ='You are UNDERWEIGHT'
    }else if (bmi >= 25 && bmi <= 29.9) {

        document.getElementById('message').innerHTML ='You are NORMAL WEIGHT'
    }else {
        document.getElementById('message').innerHTML ='You are OVER WEIGHT'
    }
}


//clear function
function clears() {
  window.location.reload() //will clear all data displayed
}
clear.addEventListener("click", () => {
  clears();
});





