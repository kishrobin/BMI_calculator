function calculatevalue() {

    let weightInput = prompt("Enter your weight in Kg :");
    let heightInput = prompt("Enter your height in Cm : ");

    let weight = parseFloat(weightInput);
    let heightcm = parseFloat(heightInput);

    let height =heightcm/100;

    let bmi=weight/(height*height);

    document.getElementById("result").innerHTML = `your BMI value is: ${bmi .toFixed(2)}`;
    let status =`you are ${bmi}`;

    if(bmi<=18.4){
        status="you are underweight";
    }else if(bmi>=18.5 && bmi<=24.9){
        status="you are healthy";
    }else if(bmi>=25.0 && bmi<=29.9){
        status="you are overweight";
    }else{
        status="you are obese..";
    }
    document.getElementById("status").innerHTML=status;


    
}