// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headChangesCount = 0;
let middleChangesCount = 0;
let bottomChangesCount = 0;
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let headFeature = headDropdown.value; 
    // increment the head change count state
    headChangesCount++;
    // update the dom for the head
    headEl.style.backgroundImage = `url(./assets/${headFeature}-head.png)`;
    // const img = document.createElement('img');
    // img.src = `./assets/${headFeature}-head.png`;
    // headEl.textContent = '';
    // headEl.append(img);
    // update the stats to show the new count
    
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let middleFeature = middleDropdown.value;
    // increment the middle change count state
    middleChangesCount++;
    // update the dom for the middle
    middleEl.style.backgroundImage = `url(./assets/${middleFeature}-middle.png)`;
    // const img = document.createElement('img');
    // img.src = `./assets/${middleFeature}-middle.png`;
    // middleEl.textContent = '';
    // middleEl.append(img);
    // update the stats to show the new count
    reportEl.textContent = ``;
    
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    
    let bottomFeature = bottomDropdown.value;
    bottomChangesCount++;
    bottomEl.style.backgroundImage = `url(./assets/${bottomFeature}-pants.png)`;
    // const img = document.createElement('img');
    // img.src = `./assets/${bottomFeature}-pants.png`;
    // bottomEl.textContent = '';
    // bottomEl.append(img);
    // increment the bottom change count state
    reportEl.textContent = `You clicked the bottom ${bottomChangesCount} times.`;
    // update the dom for the bottom

    // update the stats to show the new count
    
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const phrase = catchphraseInput.value;
    
    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(phrase);
    catchphraseInput.value = '';
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)


    displayCatchphrases();
});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    
    reportEl.textContent = makeStatsString(headChangesCount, middleChangesCount, bottomChangesCount); // call this function with the correct arguments
}
    
function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    // catchphrasesEl.textContent = '';
    // catchphraseInput.textContent = '';
    // loop through each catchphrase in state
    catchphrasesEl.textContent = '';
    for (let phrase of catchphraseArray) {
        const p = document.createElement('p');
        p.classList.add('catchphrase');
        catchphrasesEl.append(p);
        p.textContent = phrase;
        console.log(phrase);
    }
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
