function name1(){
    var name = document.getElementById('userInput').value;
    document.getElementById("insult").innerHTML = document.getElementById('userInput').value + " is dumb";
}

function name2(){
    var name = document.getElementById('userInput').value;
    document.getElementById("insult").innerHTML = document.getElementById('userInput1').value + " is " + document.getElementById('userInput2').value;
}

var insults = ['you look dumb', 'you smell', "you are bad", 'you are ugly', 'no one likes you', 'you are fat', 'you are cringe'];
function randomInsult(){
    var randNum = Math.floor(Math.random() * (insults.length));
    document.getElementById("insult").innerHTML = insults[randNum];
}

var creativeinsults = ['you look like a mushroom', "my nose falls off when I see you", "your children are on fire", "why am I so bad at coding", "I know five fat people, and you're four of them", "your parents wanted a child, not a money obliterator", "you have enough skin to shelter a family of five", "you can't bear stupidity? well, your parents could", "don't clean your bellybutton, your finger will disappear", "go eat an apple iphone 12", "you are an NFT"];
function creativeInsult(){
    var randNum = Math.floor(Math.random() * (creativeinsults.length));
    document.getElementById("insult").innerHTML = creativeinsults[randNum];
}
