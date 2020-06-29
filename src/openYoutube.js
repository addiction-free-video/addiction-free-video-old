import css from '!!raw-loader!./youtube.raw.css';
import js from '!!raw-loader!./youtube.raw.js';
import getSettingsCss from './settingsCss';
import getSettingsJS from './settingsJS';
import createMusicCotnrols from './musicControls';

export default (urlToOpen = 'https://m.youtube.com/?app=m') => {
    try {
        // Check if policy has been cofirmed, if not redirect to policy page
        const confirmedPolicy = JSON.parse(window.localStorage.getItem('confirmedPolicy'));
        if (!confirmedPolicy) {
            window.location = 'policy.html';
            return;
        }

        // Open youtube or the requestet url
        const ref = cordova.InAppBrowser.open(urlToOpen, '_blank', 'location=no,hidden=yes,beforeload=get,shouldPauseOnSuspend=no');

        // Wait for Inappbrowser to be ready
        ref.addEventListener('loadstop', function () {
            ref.insertCSS({ code: css + getSettingsCss() });
            ref.executeScript({ code: getSettingsJS() + js });
        });

        // Check url before navigating to different Page
        const beforeloadCallBack = (params, callback) => {
            if (params.url.includes('youtube.com/') || params.url.includes('accounts.google.com/')) {
                // If Url is Youtube or Login URL than continue in inappbrowser _blank
                callback(params.url);
            } else if (params.url.includes('https://gotosettings.local')) {
                // If requested URL is settings Url close inappbrwoser and navigate to settings page
                ref.close();
                window.location = 'settings.html';
            } else if (params.url.includes('https://gotodonation.local')) {
                // If requested URL is donation Url close inappbrwoser and navigate to settings page with query string for donation section
                ref.close();
                window.location = 'settings.html?section=section-donate';
            } else {
                // If requested URL is non of above open URL in native system Browser
                const systemRef = cordova.InAppBrowser.open(encodeURI(params.url), '_system');
                // Add Event listner again because it gets removed when calling inAppBrowser
                systemRef.addEventListener('beforeload', beforeloadCallBack);
                systemRef.insertCSS({ code: css + getSettingsCss() });
                systemRef.executeScript({ code: getSettingsJS() + js });
            }
        };

        const messageCallBack = (params) => {
            const message = params.data.action;

            // Recive messages from the InAppBrowser
            switch (message) {
                case 'open':
                    // Open after everything is loadad
                    ref.show();
                    break;

                case 'play':
                    // Play event when video starts palying to control Music Controls
                    if (typeof MusicControls !== 'undefined') {
                        MusicControls.updateIsPlaying(true);
                    }
                    break;

                case 'pause':
                    // Pause event when video pauses to control Music Controls
                    if (typeof MusicControls !== 'undefined') {
                        MusicControls.updateIsPlaying(false);
                    }
                    break;

                default:
                    break;
            }
        };

        ///////////////////////////
        // Music Controls
        /////////////////////////////

        const userSettings = JSON.parse(window.localStorage.getItem('settings'));
        if (userSettings?.showMediaControls === true) {
            // Init Media Controls if User has enabled them
            createMusicCotnrols();

            function musicControlsEvents(action) {
                const message = JSON.parse(action).message;
                switch (message) {
                    case 'music-controls-pause':
                        ref.executeScript({
                            code: `
                            if(typeof AFV_toggleVideo === 'function'){
                                AFV_toggleVideo('pause');
                            }
                        `,
                        });
                        break;
                    case 'music-controls-play':
                        ref.executeScript({
                            code: `
                            if(typeof AFV_toggleVideo === 'function'){
                                AFV_toggleVideo('play');
                            }
                        `,
                        });
                        break;
                    default:
                        break;
                }
            }

            // Register callback
            MusicControls.subscribe(musicControlsEvents);

            // Start listening for events
            // The plugin will run the events function each time an event is fired
            MusicControls.listen();
        }

        ///////////////////////////
        // Event Listners
        //////////////////////////

        ref.addEventListener('message', messageCallBack);

        ref.addEventListener('beforeload', beforeloadCallBack);

        return ref;
    } catch (error) {
        alert(error);
    }
};
