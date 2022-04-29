let score = 0;
let character;
let guess = Array();
let chars;
let Ids= [];
let n;
let temp;
let i;
let letter;
let entry;
let reward;
let p;
let text;
let length;
let word;

function yourGuess() {
    document.getElementById("reply").innerHTML = "";
}

function randomWord() {
    word = words[Math.floor(Math.random()*words.length)];
    chars = word.split("");
    n = chars.length;
}
function randomButtons() {
    letter = chars.splice(Math.floor(Math.random()*chars.length),1)[0];
    temp.push('<button type="button" style="visibility:visible;" class="button-small" ' +
        'id="' + i + '" onclick="enter(\''+letter+ '\',' + i + ');" value="'+ letter +'">' + letter + '</button>');
}

function hiddenWord(){
    chars = temp;
    document.getElementById("word").innerHTML = chars.join("");
    document.getElementById("wordLength").innerHTML = word;
    guess = Array();
    document.getElementById("wordLength").style.visibility="hidden";
}

function easy()
{
    yourGuess();
    do
    {
        randomWord();
    }
    while(n >= 6)
    temp = [];
    for(i = 0; i < n; i++)
    {
        randomButtons();
    }
    hiddenWord();
}

function medium()
{
    yourGuess();
    do
    {
        randomWord();
    }
    while(n >= 8 || n <= 5)
    temp = [];
    for(i = 0; i < n; i++)
    {
        randomButtons();
    }
    hiddenWord();
}

function difficult()
{
    yourGuess();
    do
    {
        randomWord();
    }
    while(n <= 7)
    temp = [];
    for(i = 0; i < n; i++)
    {
        randomButtons();
    }
    hiddenWord();
}

function checkWord()
{
    entry = document.getElementById("reply").innerHTML;
    if(words.indexOf(entry) > -1)
    {
        reward = (guess.length) * 1000;
        score = score + reward;
        document.getElementById('score').innerHTML = score;
        document.getElementById("reply").innerHTML = "";
        guess = Array();

        p=document.createElement("P");
        text=document.createTextNode("You guessed the word " + entry + ' and earned ' + reward + ' points');
        p.style.color = 'green';
        p.appendChild(text);
        document.getElementById("Results").appendChild(p);
        document.getElementById("Results").insertBefore(p, document.getElementById("Results").children[0]);

        document.getElementById("wordLength").style.visibility="visible";
        document.getElementById("wordLength").style.color="green";

    }
    else{
        document.getElementById('score').innerHTML = score;
        document.getElementById("reply").innerHTML = "";
        guess = Array();

        p=document.createElement("P");
        text=document.createTextNode("The selected word is not correct and you have gained no points.");
        p.style.color = 'red';
        p.appendChild(text);
        document.getElementById("Results").appendChild(p);
        document.getElementById("Results").insertBefore(p, document.getElementById("Results").children[0]);

        document.getElementById("wordLength").style.visibility="visible";
        document.getElementById("wordLength").style.color="red";
    }
}

function enter(value,id)
{
    character = value;
    console.log(Ids);
    Ids.push(id);
    console.log(Ids[0]);
    guess.push(character);
    document.getElementById(id).style.visibility="hidden";
    document.getElementById("reply").innerHTML =  guess.join("");
    length = document.getElementById("reply").innerHTML.length;
    word = document.getElementById("wordLength").innerHTML.length;
    
}
function backSpace()
{
    document.getElementById(Ids.pop()).style.visibility="visible";
    reply.textContent = reply.textContent.slice(0, -1);
    guess.splice(guess.length-1,1);
}