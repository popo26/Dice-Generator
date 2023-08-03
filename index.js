// You have been hired by
// devsInc to create a landing page for their
// new project. They want to support people playing tabletop games
// from home and require a Dice Generator.
// Features:
// The user should be able to use different dice, such as a D6 or a D10
// (number of faces).

const json6 = '{"sides": 6, "color": "red", "size": "small"}';

const json10 = '{"sides": 10, "color": "yellow", "size": "Medium"}';

const json14 = '{"sides": 14, "color": "blue", "size": "large"}';

// console.log(JSON.parse(json6).sides);

// const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON);
// x = myObj.name;
// console.log(x);

let pickNumber = 0;
let selectedNumber = 0;
let diceChosen = {};
// console.log(diceChosen);

function showDiceInfo(){
   
    // pickNumber = Math.floor(Math.random() * pickNumber) + 1;
    switch (pickNumber){
        case 6:
            const d6 = JSON.parse(json6);
            diceChosen = d6;
            // console.log(diceChosen);
            // console.log(d6);
            // console.log(diceChosen.sides)
            break;
        case 10:
            const d10 = JSON.parse(json10);
            diceChosen = d10;
            break;
        case 14:
            const d14 = JSON.parse(json14);
            diceChosen = d14;
            break;
        default:
            break;
    }
    // console.log(diceChosen.sides)
    document.getElementById("sides").innerHTML = "Num of sides is " + diceChosen.sides;
    document.getElementById("color").innerHTML = "Color is " + diceChosen.color;
    document.getElementById("size").innerHTML = "Size is " + diceChosen.size;
}

// function updateFaceDiceNum(){
//     pickNumber = Math.floor(Math.random() * pickNumber) + 1;
//     document.getElementById("diceFaceNum").innerHTML = "Your dice is " + pickNumber;
// }

// function userChoice(number){
//  pickNumber = number;
//  updateFaceDiceNum();
// }

function userChoice(number){
    pickNumber = number;
    console.log("you picked " + pickNumber);
    showDiceInfo();
   }

function turnOnColor(color){
document.querySelector(`.${color}`).style.backgroundColor = `${color}`; 
}

function turnOffColor(color){
    document.querySelector(`.${color}`).style.backgroundColor = "grey";
}

function selectDice(num){
    pickNumber = num;
    selectedNumber = num;
    showDiceInfo();
document.querySelector(".selectedDice").innerHTML = `You selected Dice ${num}`;
}

function rollDice(){
    if (selectedNumber === 0){
        document.getElementById("diceFaceNum").innerHTML = "Select dice from below"; 
        document.querySelector(".selectedDice").innerHTML = "No dice selected";
        // console.log(selectedNumber);
        // console.log(pickNumber);
    }else{
        selectedNumber = Math.floor(Math.random() * selectedNumber) + 1;
        document.getElementById("diceFaceNum").innerHTML = "You got " + selectedNumber;
        document.querySelector(".selectedDice").innerHTML = "Good roll! Select again.";
        selectedNumber = 0;
    }
}

function toggleUserCreationForm(){
    let form = document.querySelector(".user-creation-form");
    if (form.style.display == "none" || form.style.display == "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
}










