const agree = document.querySelector('#policy-agree');
const cancel = document.querySelector('#policy-cancel');
const moreInformation = document.querySelector('#policy-moreinfo');

agree.addEventListener('click', function () {
    window.localStorage.setItem('confirmedPolicy', JSON.stringify(true));
    window.location = 'index.html';
});

cancel.addEventListener('click', function () {
    navigator.app.exitApp();
});

moreInformation.addEventListener('click', function () {
    window.location = 'settings.html?section=section-policy';
});
