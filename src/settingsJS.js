export default () => {
    const settings = JSON.parse(window.localStorage.getItem('settings'));

    let js = '';

    if (settings?.customJS) {
        js += ' ' + settings?.customJS;
    }

    //Disable Autoplay
    if (settings?.disableAutoplay) {
        js += ' var AFV_disableAutoplay = true;';
    }

    //js Without Condition
    js += `
    `;

    return js;
};
