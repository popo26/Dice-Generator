// You have been hired by
// devsInc to create a landing page for their
// new project. They want to support people playing tabletop games
// from home and require a Dice Generator.
// Features:
// The user should be able to use different dice, such as a D6 or a D10
// (number of faces).

const json6 = '{"sides": 6, "color": "Red", "size": "Small"}';

const json10 = '{"sides": 10, "color": "Yellow", "size": "Medium"}';

const json14 = '{"sides": 14, "color": "Blue", "size": "Large"}';


let pickNumber = 0;
let selectedNumber = 0;
let diceResult = 0;
let diceChosen = {};
let d6Count = 0;
let d6Array = [];
let d6Average = 0;
let d6Sum = 0;
let totalGameCount = 0;

function showDiceInfo(){
    switch (pickNumber){
        case 6:
            const d6 = JSON.parse(json6);
            diceChosen = d6;
            document.querySelector("details").style.backgroundColor = "red";
            document.querySelector("details").style.color = "#EEEEEE";
            break;
        case 10:
            const d10 = JSON.parse(json10);
            diceChosen = d10;
            document.querySelector("details").style.backgroundColor = "yellow";
            document.querySelector("details").style.color = "#003300";
            break;
        case 14:
            const d14 = JSON.parse(json14);
            diceChosen = d14;
            document.querySelector("details").style.backgroundColor = "blue";
            document.querySelector("details").style.color = "#EEEEEE";
            break;
        default:
            break;
    }
    document.getElementById("sides").innerHTML = "Sides: " + diceChosen.sides;
    document.getElementById("color").innerHTML = "Color: " + diceChosen.color;
    document.getElementById("size").innerHTML = "Size: " + diceChosen.size;
}

function userChoice(number){
    pickNumber = number;
    showDiceInfo();
   }

function turnOnColor(color){
    document.querySelector(`.${color}`).style.backgroundColor = `${color}`
    document.querySelector(`.${color}`).style.color = "#003300";
    document.querySelector(`.${color}`).style.fontWeight = "bold";
}

function turnOffColor(color){
    document.querySelector(`.${color}`).style.color = "#ffffff";
    document.querySelector(`.${color}`).style.backgroundColor = "#003300";
    document.querySelector(`.${color}`).style.fontWeight = "normal";
}

function turnOnColorBlue(color){
    document.querySelector(`.${color}`).style.backgroundColor = `${color}`
    document.querySelector(`.${color}`).style.color = "#EEEEEE";
    document.querySelector(`.${color}`).style.fontWeight = "bold";
    }
    

function selectDice(num){
    pickNumber = num;
    selectedNumber = num;
    showDiceInfo();
    document.querySelector(".selectedDice").innerHTML = `You selected Dice ${num}`;
}

function rollDice(){
    if (selectedNumber === 0){
        document.getElementById("diceFaceNum").innerHTML = "👇🏼 Select dice from below 👇🏼";
        document.querySelector(".selectedDice").innerHTML = "No dice selected";
        document.querySelector(".selectedDice").style.color = "#990000";
        
    }else{
        if (selectedNumber === 6){
            diceResult = Math.floor(Math.random() * selectedNumber) + 1;
            document.getElementById("diceFaceNum").innerHTML = "You got " + diceResult;
            document.querySelector(".selectedDice").innerHTML = "Good roll! Select again 👇🏼";
            d6Count++;
            d6Array.push(diceResult);
            showD6Table();
            getAverage();
        } else{
            hideD6Table();
            diceResult = Math.floor(Math.random() * selectedNumber) + 1;
            document.getElementById("diceFaceNum").innerHTML = "You got " + diceResult;
            document.querySelector(".selectedDice").innerHTML = "Woohoo! Select again 👇🏼";
        }
        selectedNumber = 0;
        totalGameCount++;
        updateTotalGameCount();
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

function showD6Table(){
    let grid = document.querySelector(".table-with-average");
    if (grid.style.display == "none" || grid.style.display == "") {
        grid.style.display = "block";
      } 
}

function hideD6Table(){
    let grid = document.querySelector(".table-with-average");
    if (grid.style.display == "block") {
        grid.style.display = "none";
      } 
}

function updateTotalGameCount(){
    document.querySelector(".total-game-count").innerHTML = `Total Game Count: ${totalGameCount}`;
}

function revertFontColorSelectedDiceCss(){
    document.querySelector(".selectedDice").style.color = "#003300";
}

//Function to calculate average time when each number for dice 6 is rolled.e.g., if side 2 is rolled twice in total 2 rolls, 100%. If side 2 is rolled twice in total 4 rolls, 50%.
function getAverage(){
    let d6Side1 = 0;
    let d6Side2 = 0;
    let d6Side3 = 0;
    let d6Side4 = 0;
    let d6Side5 = 0;
    let d6Side6 = 0;
    
    let d6Side1Ave = 0;
    let d6Side2Ave = 0;
    let d6Side3Ave = 0;
    let d6Side4Ave = 0;
    let d6Side5Ave = 0;
    let d6Side6Ave = 0;

    for (let i=0; i<d6Array.length; i++){
        if (d6Array[i] === 1){
            d6Side1++;
            d6Side1Ave = Math.floor((d6Side1 / d6Count) * 100);
            document.querySelector(".grid1").innerHTML = d6Side1;
            document.querySelector(".ave1").innerHTML = `${d6Side1Ave} %`;
        }else if (d6Array[i] === 2){
            d6Side2++;
            d6Side2Ave = Math.floor((d6Side2 / d6Count) * 100);
            document.querySelector(".grid2").innerHTML = d6Side2;
            document.querySelector(".ave2").innerHTML = `${d6Side2Ave} %`;
        }else if (d6Array[i] === 3){
            d6Side3++;
            d6Side3Ave = Math.floor((d6Side3 / d6Count) * 100);
            document.querySelector(".grid3").innerHTML = d6Side3;
            document.querySelector(".ave3").innerHTML = `${d6Side3Ave} %`;
        }else if (d6Array[i] === 4){
            d6Side4++;
            d6Side4Ave = Math.floor((d6Side4 / d6Count) * 100);
            document.querySelector(".grid4").innerHTML = d6Side4;
            document.querySelector(".ave4").innerHTML = `${d6Side4Ave} %`;
        }else if (d6Array[i] === 5){
            d6Side5++;
            d6Side5Ave = Math.floor((d6Side5 / d6Count) * 100);
            document.querySelector(".grid5").innerHTML = d6Side5;
            document.querySelector(".ave5").innerHTML = `${d6Side5Ave} %`;
        }else{
            d6Side6++;
            d6Side6Ave = Math.floor((d6Side6 / d6Count) * 100);
            document.querySelector(".grid6").innerHTML = d6Side6;
            document.querySelector(".ave6").innerHTML = `${d6Side6Ave} %`;
        }
    } 
}













