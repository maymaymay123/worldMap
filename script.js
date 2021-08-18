"use strict";


//set global variables
let country;
let guessCount = 0;
let mins = 20;
let secs = 0;
let time;
let score = 0;
let percentage = 0;
let correctAns=[];
document.querySelector("#musicBox").style.cursor="pointer";

let myAudio = document.querySelector("#music");
let isPlaying = false;


//music on off
function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};

//function to start the time, change every 1 second
function startTimeFunction (event){
    event.preventDefault();
    myTimer();
    time = setInterval(myTimer, 1000);
}

//set timer function, activate when clicked
function myTimer() {	 
    document.getElementById('start-btn').style.visibility = "hidden";
    document.querySelector('#text-box').style.visibility="visible";
    document.querySelector('#giveup').style.visibility="visible";
    document.querySelector('#resetbutton').style.visibility="visible";
    document.querySelector('#displayscore').style.visibility="visible";
    document.querySelector('#correctTitle').style.visibility="visible";

    secs--;
    if (secs == -1) {
		mins--;
		secs = 59;
		} 
    if (mins === 0 && secs <= 50){
        document.getElementById('time-container').style.color='red';
    }
    if (secs < 10){
        document.getElementById('time-container').innerHTML = "Time left: "+mins + ":0" + secs ;  
    }
    else{
  	    document.getElementById('time-container').innerHTML = "Time left: "+mins + ":" + secs ;
    }
    if (mins<=0 && secs<=0) {           
        clearInterval(time);
        document.querySelector("#text-box").disabled = true;
        showTheScore();
        percentageFunction(event);
        continentBox ();
        document.querySelector('#giveup').style.visibility="hidden";
    }

    if (countries.length === 0){
        stopTime();
        const congrat = document.createElement('div')
        congrat.innerText = 'Congratz! You did it!';
        document.querySelector('#congratz').append(congrat);
        showTheScore();

    }
}


document.querySelector('#start-btn').addEventListener('click', startTimeFunction)

const inputBox = document.querySelector('#text-box');

//use enter key to submit and clear the inputbox
function enterKeyToSubmit (event){
    event.preventDefault();
    if (event.keyCode === 13){
        document.getElementById("submit-btn").click();
        let inputBox = document.querySelector('#text-box');
        let original_inputValue = inputBox.value;
        let inputValue = standardizeInput(original_inputValue);
        displayCorrectAnswer(inputValue);
        continentScore ()
    }
}

document.querySelector('#text-box').addEventListener("keyup",enterKeyToSubmit)
   
let africaList=[];
let asiaList=[];
let northList=[];
let southList =[];
let europeList = [];
let oceaniaList =[];

// function to display correct answers on page, remove answers from the list, clear text-box if answer is incorrect
function displayCorrectAnswer(inputValue){
    const answerList = document.querySelector('#youranswerlist');
    let correctAnswer = false
    for (const item of countries) {
        if (inputValue.toLowerCase() === item.toLowerCase()){
            correctAns.push(item)
            const newDiv = document.createElement('div');
            newDiv.innerText = item;
            answerList.append(newDiv);
            countries.splice(countries.indexOf(item),1);
            document.querySelector('#message').innerText = "Correct: " + item;
            correctAnswer = true;
        }

        inputBox.value="";
        showTheScore();   
    }
    if (correctAnswer === false) {
        document.querySelector('#message').innerText = "Wrong answer or repeated answer: "+inputValue;
    }
    for (const item of countriesAfrica) {
      if (inputValue.toLowerCase() === item.toLowerCase()){
          africaList.push(item)
          countriesAfrica.splice(countriesAfrica.indexOf(item),1);
      }
    }
    for (const item of countriesAsia) {
      if (inputValue.toLowerCase() === item.toLowerCase()){
          asiaList.push(item)
          countriesAsia.splice(countriesAsia.indexOf(item),1);
      }
    }
    for (const item of countriesNorthAmerica) {
      if (inputValue.toLowerCase() === item.toLowerCase()){
          northList.push(item)
          countriesNorthAmerica.splice(countriesNorthAmerica.indexOf(item),1);
      }
    }
    for (const item of countriesSouthAmerica) {
      if (inputValue.toLowerCase() === item.toLowerCase()){
          southList.push(item)
          countriesSouthAmerica.splice(countriesSouthAmerica.indexOf(item),1);
      }
    }
    for (const item of countriesEurope) {
      if (inputValue.toLowerCase() === item.toLowerCase()){
          europeList.push(item)
          countriesEurope.splice(countriesEurope.indexOf(item),1);
      }
    }
    for (const item of countriesOceania) {
      if (inputValue.toLowerCase() === item.toLowerCase()){
          oceaniaList.push(item)
          countriesOceania.splice(countriesOceania.indexOf(item),1);
      }
    }
} 

//standadize the input, to match the answer
function standardizeInput(inputValue){
    inputValue = inputValue.toLowerCase();
    if (inputValue === "car"){
        inputValue = "central african republic";
    }
    else if (inputValue === "congo (the democratic republic of the)" ||   inputValue === "drc" || inputValue ==="dr congo"){
        inputValue = "democratic republic of the congo";
    }
    else if (inputValue === "czech republic"){
        inputValue = "czechia";
    }
    else if (inputValue ==="ivory coast"){
        inputValue = "cote d'ivoire";
    }
    else if (inputValue === "guinea bissau"){
        inputValue = "guinea-bissau";
    }
    else if (inputValue === "holy see"){
        inputValue = "vatican city";
    }
    else if (inputValue === "republic of north macedonia"){
        inputValue ="north macedonia";
    }
    else if (inputValue ==="russian federation"){
        inputValue ="russia";
    }
    else if (inputValue === "saint kitts and nevis" || inputValue ==="st kitts and nevis" || inputValue ==="st. kitts and nevis"){
        inputValue ="st kitts and nevis";
    }
    else if (inputValue === "saint lucia" || inputValue === "st. lucia"){
        inputValue = "st lucia";
    }
    else if (inputValue === "burma"){
      inputValue = "myanmar";
    }
    else if (inputValue === "saint vincent and the grenadines" || inputValue === "st. vincent and grenadines"){
        inputValue ="st vincent and grenadines";
    }
    else if (inputValue === "syrian arab republic"){
        inputValue ="syria";
    }
    else if (inputValue === "tanzania united republic of"){
        inputValue = "tanzania";
    }
    else if (inputValue === "timor leste" || inputValue === "east timor"){
        inputValue = "timor-leste";
    }
    else if (inputValue ==="uae") {
        inputValue = "united arab emirates";
    }
    else if (inputValue === "united kingdom of great britain and northern ireland" || inputValue ==="uk"){
        inputValue ="united kingdom";
    }
    else if (inputValue ==="usa"){
        inputValue = "united states of america";
    }
    return inputValue;
}

//stop the time 
function stopTime() {
    clearInterval(time);
}

//Give up link
const giveupColumn = document.querySelector('#giveup');
giveupColumn.style.cursor="pointer";

function giveUpLink (event){
    event.preventDefault()
    //need to freeze the time
    stopTime()
    //disable the text-box
    document.querySelector("#text-box").disabled = true;
    showTheScore(correctAns);
    continentBox();
    document.querySelector("#giveup").style.visibility="hidden";

}

giveupColumn.addEventListener('click', giveUpLink);


 // Display score and update score
 function showTheScore(){
    guessCount=0;
    for (let i=0;i<correctAns.length;i++){
        guessCount++;
    }
    //console.log(guessCount)
    document.querySelector('#displayscore').innerText = "Your score: "+guessCount+"/197";
}

//score for each continent
function continentScore (){
    document.querySelector('#africaScore').innerText = africaList.length+"/54";
    document.querySelector('#asiaScore').innerText = asiaList.length+"/47";
    document.querySelector('#northScore').innerText = northList.length+"/23";
    document.querySelector('#southScore').innerText = southList.length+"/12";
    document.querySelector('#europeScore').innerText = europeList.length+"/47";
    document.querySelector('#oceaniaScore').innerText = oceaniaList.length+"/14";
}

//hover the score to see the answer when time is out or give up
document.querySelector("#africaScore").style.cursor="pointer";
document.querySelector("#asiaScore").style.cursor="pointer";
document.querySelector("#northScore").style.cursor="pointer";
document.querySelector("#southScore").style.cursor="pointer";
document.querySelector("#europeScore").style.cursor="pointer";
document.querySelector("#oceaniaScore").style.cursor="pointer";

function seeAnswerAfrica(event){
   document.querySelector("#africa-box").scrollIntoView();
   document.querySelector('#africa-box').style.border="10px white solid";
}
document.querySelector("#africaScore").addEventListener('click', seeAnswerAfrica)

function seeAnswerAsia(event){
    document.querySelector("#asia-box").scrollIntoView();
    document.querySelector('#asia-box').style.border="10px yellow solid";
}
document.querySelector("#asiaScore").addEventListener('click', seeAnswerAsia)

function seeAnswerNorth(event){
    document.querySelector("#north-america-box").scrollIntoView();
    document.querySelector('#north-america-box').style.border="10px yellow solid";
}
document.querySelector("#northScore").addEventListener('click', seeAnswerNorth)

function seeAnswerSouth(event){
    document.querySelector("#south-america-box").scrollIntoView();
    document.querySelector('#south-america-box').style.border="10px yellow solid";
}
document.querySelector("#southScore").addEventListener('click', seeAnswerSouth)

function seeAnswerEurope(event){
    document.querySelector("#europe-box").scrollIntoView();
    document.querySelector('#europe-box').style.border="10px yellow solid";
}
document.querySelector("#europeScore").addEventListener('click', seeAnswerEurope)

function seeAnswerOceania(event){
    document.querySelector("#oceania-box").scrollIntoView();
    document.querySelector('#oceania-box').style.border="10px yellow solid";
}
document.querySelector("#oceaniaScore").addEventListener('click', seeAnswerOceania)

 //Count percentage
function percentageFunction (event){
    percentage = correctAns.length/197*100;
    let percentRound = percentage.toFixed(2);
    document.querySelector('#percentage').innerText= "You got: "+percentRound+"%";
}

document.querySelector('#giveup').addEventListener('click', percentageFunction)


//button to reset everything, the time will reset too
function resetEverything() { 
    location.reload();
 }   

document.querySelector("#resetbutton").addEventListener('click',resetEverything)


//the boxes for unanswered list
function continentBox (){
    const ansTitle = document.createElement('h4');
    const ansTitleId=document.querySelector("#unansweredTitle");
    ansTitle.innerText = "Unanswered Answers: ";
    ansTitleId.append(ansTitle);

    document.querySelector("#africa-box").style.visibility="visible";
    document.querySelector("#asia-box").style.visibility="visible";
    document.querySelector("#north-america-box").style.visibility="visible";
    document.querySelector("#south-america-box").style.visibility="visible";
    document.querySelector("#europe-box").style.visibility="visible";
    document.querySelector("#oceania-box").style.visibility="visible";
    const africaId = document.querySelector('#africa-box');
    const africaTitle = document.createElement('div');
    africaTitle.innerText = "Africa";
    africaId.append(africaTitle)
    const africaDiv = document.createElement('div');
    let africaText = ""
    for (const item of countriesAfrica) {
      africaText = africaText + item + ", ";
    }
    africaDiv.innerText = africaText;
    africaId.append(africaDiv);
    

    const asiaId = document.querySelector('#asia-box');
    const asiaTitle = document.createElement('div');
    asiaTitle.innerText = "Asia";
    asiaId.append(asiaTitle)
    const asiaDiv = document.createElement('div');
    let asiaText =""
    for (const item of countriesAsia){
        asiaText = asiaText + item + ", ";
    }
    asiaDiv.innerText = asiaText;
    asiaId.append(asiaDiv);


    const northId = document.querySelector('#north-america-box');
    const northTitle = document.createElement('div');
    northTitle.innerText = "North America";
    northId.append(northTitle)
    const northDiv = document.createElement('div');
    let northText=""
    for (const item of countriesNorthAmerica){
        northText = northText +item + ", ";
    }
    northDiv.innerText = northText;
    northId.append(northDiv);


    const southId = document.querySelector('#south-america-box');
    const southTitle = document.createElement('div');
    southTitle.innerText = "South America";
    southId.append(southTitle)
    const southDiv = document.createElement('div');
    let southText = ""
    for (const item of countriesSouthAmerica){
        southText = southText + item + ", ";
    }
    southDiv.innerText = southText;
    southId.append(southDiv);


    const europeId = document.querySelector('#europe-box');
    const europeTitle = document.createElement('div');
    europeTitle.innerText = "Europe";
    europeId.append(europeTitle)
    const europeDiv = document.createElement('div');
    let europeText = "";
    for (const item of countriesEurope){
        europeText = europeText + item + ", ";
    }
    europeDiv.innerText = europeText;
    europeId.append(europeDiv);


    const oceaniaId = document.querySelector('#oceania-box');
    const oceaniaTitle = document.createElement('div');
    oceaniaTitle.innerText = "Oceania";
    oceaniaId.append(oceaniaTitle)
    const oceaniaDiv = document.createElement('div');
    let oceaniaText = "";
    for (const item of countriesOceania){
        oceaniaText = oceaniaText + item + ", ";
    }
    oceaniaDiv.innerText = oceaniaText;
    oceaniaId.append(oceaniaDiv);

}

