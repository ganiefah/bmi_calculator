//declare variables
let calculate = document.getElementById('calculate');
let clear = document.getElementById('clear');



//making the bmi function
function calculateBmi() {
    let weight = document.getElementById('Weight').value
    let height = document.getElementById('Height').value
    if (height === "" || isNaN(height)) {
    display.innerHTML = "Please use valid information"; 
    display.style.color = "orange"
  } else if (weight === "" || isNaN(weight)) {
    display.innerHTML = "Please us valid information";
    display.style.color = "orange"
  } else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi <= 18.5) {
        display.innerHTML =`You are UNDERWEIGHT 😨 : ${bmi}`;
        display.style.color = "red"
    }else if (bmi >= 18.5 && bmi <= 29.9) {
        display.innerHTML =`You are NORMAL WEIGHT 🤩: ${bmi}`;
        display.style.color = "green"
    }else {
        display.innerHTML =`You are OVER WEIGHT 😮: ${bmi}`;
        display.style.color = "red"
    }
}}


//clear function
function clears() {
  window.location.reload() //will clear all data displayed
}
clear.addEventListener("click", () => {
  clears();
});





