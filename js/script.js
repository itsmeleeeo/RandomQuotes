/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * quotes array 
***/
//Here I triggered an random quote to display any information on the screen for the very first time
window.addEventListener('load', getRandomQuote);

//the object to store my quote index
const citation = {
  quote: String,
  source: String
}
var quotes = ['Life is like riding a bicycle. To keep your balance, you must keep moving.', 'Eighty percent of success is showing up.', 'Elementary, my dear Watson.', 'Genius is one percent inspiration and ninety-nine percent perspiration.', 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.', `I'll be back.`];
var src = ['Albert Einstein','Woody Allen', 'Sherlock Holmes', 'Thomas Edison', 'Martin Luther King', 'Terminator (character)'];



/***
 * `getRandomQuote` function
***/

//I am generating the random number according to my index size
var randomNum = Math.floor(Math.random() * 6);
var quoteView;
var srcView;

function getRandomQuote() {
  for(let i = 0; i < randomNum; i++) {
    citation.quote = quotes[i];
    citation.source = src[i];
    quoteView = citation.quote;
    srcView = citation.source;
    
    document.querySelector('.quote').innerHTML = quoteView;
    document.querySelector('.source').innerHTML = srcView;
  }
  
}


/***
 * `printQuote` function
***/
function printQuote() {
    randomNum = Math.floor(Math.random() * 6);
    citation.quote = quotes[randomNum];
    citation.source = src[randomNum];
    quoteView = citation.quote;
    srcView = citation.source;
    
    document.querySelector('.quote').innerHTML = quoteView;
    document.querySelector('.source').innerHTML = srcView;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
