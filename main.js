/*let movie;
movie1 ="master";
movie2 ="beast"
console.log(movie1);*/


// let person1 = 50;
// let person2 = 55;
// let person3 =33;
// let totalamt=(person1+person2+person3);
// console.log(totalamt);




// let leoblockbuster =true;
// console.log(leoblockbuster);



// let gay="arulmozhi";
// let pombalasoku ="kavi";
// let gaji ="robin";
// let lavadagang =(gaji+gay+pombalasoku);
// console.log(lavadagang);

// let kavikaranpombala_porukii=true;
// console.log(kavikaranpombala_porukii);


// let athimbel ="gaji No:1";
// let bob ="local item no1";
// let declareorginalty=(bob + athimbel);
// console.log(declareorginalty);

function calculatevalue() {

    let weightInput = prompt("Enter your weight in Kg :");
    let heightInput = prompt("Enter your height in Cm : ");

    let weight = parseFloat(weightInput);
    let heightcm = parseFloat(heightInput);

    let height =heightcm/100;

    let bmi=weight/(height*height);

    document.getElementById("result").innerHTML = `your BMI value is: ${bmi .toFixed(2)}`;
    
}