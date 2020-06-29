import openYoutube from './openYoutube';

////////////////////
// Deafults
//////////////////

const defaultCountdown = 30;

////////////////////
// Elements
//////////////////
const settingsForm = document.querySelector('.settings__form');
const feedback = document.querySelector('.feedback');
const settingsSections = settingsForm.querySelectorAll('.settings__section h3');
const settingsSectionCloseButtons = settingsForm.querySelectorAll('.settings__section-close');
const timerElement = document.querySelector('.timer');
const popUp = document.querySelector('.popup');

////////////////////
// Button Elements
//////////////////

const submitButton = document.querySelector('#submit');
const closeButton = document.querySelector('#close');

const submitPupUpButton = document.querySelector('#submit-popup');
const closePopUpButton = document.querySelector('#close-popup');

////////////////////
// Input Elements
// Get all Input elements and set its value to stored user settings
//////////////////
const oldSettings = JSON.parse(window.localStorage.getItem('settings'));

const checkboxInputs = settingsForm.querySelectorAll('input[type="checkbox"]');
checkboxInputs.forEach((input) => {
    input.checked = oldSettings[input.name] ? oldSettings[input.name] : false;
});

const textInputs = settingsForm.querySelectorAll('input[type="text"]');
textInputs.forEach((input) => {
    input.value = oldSettings[input.name] ? oldSettings[input.name] : '';
});

const numberInputs = settingsForm.querySelectorAll('input[type="number"]');
numberInputs.forEach((input) => {
    input.value = oldSettings[input.name] ? oldSettings[input.name] : 0;
});

const textareas = settingsForm.querySelectorAll('textarea');
textareas.forEach((input) => {
    input.value = oldSettings[input.name] ? oldSettings[input.name] : '';
});

////////////////////
// Status Variables
//////////////////

let timer;
let popUpOpen = false;

////////////////////
// Function
//////////////////

const checkCounter = () => {
    // Handle Save Countdown
    setTimeout(() => {
        if (popUpOpen && timer > 0) {
            timer = timer - 1;
            timerElement.innerHTML = timer;
            checkCounter();
        } else if (!popUpOpen) {
            timer = oldSettings?.timer || defaultTimer;
        } else if (popUpOpen && timer <= 0) {
            submitPupUpButton.removeAttribute('disabled');
        }
    }, 1000);
};

const saveForm = () => {
    let settings = {};

    // Get all input elements, get the new value and store it in settings variable
    checkboxInputs.forEach((input) => {
        settings[input.name] = input.checked;
    });

    textInputs.forEach((input) => {
        settings[input.name] = input.value;
    });

    numberInputs.forEach((input) => {
        settings[input.name] = input.value;

        // Make sure user doesn't type in to high value into save Coutdown
        if (input.name === 'saveCountdown') {
            settings[input.name] = input.value > 1000 ? defaultCountdown : input.value;
        }
    });

    textareas.forEach((input) => {
        settings[input.name] = input.value;
    });

    // Store settings
    window.localStorage.setItem('settings', JSON.stringify(settings));

    // Give Users Feedback
    feedback.innerHTML = 'Settings Saved';

    setTimeout(() => {
        feedback.innerHTML = '';
    }, 4000);
};

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

////////////////////
// Event Listners
//////////////////

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    timer = oldSettings['saveCountdown'] || defaultCountdown;
    submitPupUpButton.setAttribute('disabled', true);
    popUpOpen = true;
    popUp.style.visibility = 'visible';
    timerElement.innerHTML = timer;

    checkCounter();
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    openYoutube();
});

closePopUpButton.addEventListener('click', (e) => {
    e.preventDefault();

    popUpOpen = false;
    popUp.style.visibility = 'hidden';
});

submitPupUpButton.addEventListener('click', (e) => {
    e.preventDefault();

    saveForm();
    popUpOpen = false;
    popUp.style.visibility = 'hidden';
});

settingsSections.forEach((section) => {
    section.addEventListener('click', (e) => {
        e.preventDefault();

        section.parentElement.querySelector('.settings__section-content')?.classList.add('visible');
    });
});

settingsSectionCloseButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        button.parentElement.classList.remove('visible');
    });
});

////////////////////
// Initial Script
//////////////////

// Automatically open section based on URL query string paramenter
var sectionToOpen = getUrlVars()['section'];

if (sectionToOpen) {
    const sectionDOM = document.getElementById(sectionToOpen);
    sectionDOM.querySelector('.settings__section-content')?.classList.add('visible');
}
