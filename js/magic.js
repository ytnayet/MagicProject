let answers = ["As I see it, yes", 
"Yes", "Signs point to yes",
"Don't count on it", 
"My reply is no",
"My sources say no", 
"Outlook not so good",
"Very doubtful", 
"Reply hazy, try again", 
"Ask again later", 
"Better not tell you now",
"Cannot predict now", 
"It is decidedly so", 
"Without a doubt", 
"Yes, definitely",
"You may rely on it", 
"It is certain", 
"Most likely", 
"Outlook good", 
"Concentrate and ask again"];


// function createView() {
// h1.style.fontcolor = '#ffb804';
// h1.style.fontSize = '2.5em';
// h1.style.fontWeight = '100';
// h1.style.fontWeight = 'bold';
// }

// createView()




window.onload = function() {
let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let eightball = document.getElementById("eight-ball");
let question = document.getElementById("question");

eightball.addEventListener("click", function() {
if (question.value.length == 0) {
alert('Enter a question!');
} 
 else{
eight.innerText = "";
let num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};

// function reset() {
//     document.getElementById("Reset").reset();
// }
// Reset()