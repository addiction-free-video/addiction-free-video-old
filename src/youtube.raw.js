try {
    ////////////////////
    // Elements
    //////////////////
    var startTabButtonChild = document.querySelector('.pivot-w2w');
    var startTabButton;
    if (startTabButtonChild) {
        startTabButton = startTabButtonChild.parentElement;
    }
    var youtubeLogo = document.querySelector('.mobile-topbar-header-endpoint');
    var AFV_videoElement;

    ////////////////////
    // Variables
    //////////////////
    var currentYoutubeUrl = location.href;

    ////////////////////
    // Functions
    //////////////////

    if (typeof AFV_sendPostMessage === 'undefined') {
        // Send post messages to cordova
        function AFV_sendPostMessage(messageToSend) {
            var message = { action: messageToSend };
            if (!webkit.messageHandlers.cordova_iab) {
                console.warn('Cordova IAB postMessage API not found!');
                throw 'Cordova IAB postMessage API not found!';
            } else {
                webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message));
            }
        }
    }

    if (typeof AFV_videoChangeEvent === 'undefined') {
        // Send message to cordova when video play/pauses for media controls
        function AFV_videoChangeEvent(e) {
            AFV_sendPostMessage(e.type);
        }
    }

    if (typeof AFV_doYoutubeManipulations === 'undefined') {
        // Inset DOM Elements into Youtube and manipulate the player

        function AFV_doYoutubeManipulations() {
            // Make sure no one seraches for "youtube"
            if (window.location.href.toLowerCase() === 'https://m.youtube.com/results?search_query=youtube') {
                window.location.href = 'https://m.youtube.com/';
            }

            //Insert Setings Icon Button on settings page
            var afvSettingsButton = document.querySelector('.afv-settings-button');
            if (!afvSettingsButton) {
                var youtubeSettingsButton = document.querySelector('ytm-settings ytm-setting-generic-category');
                if (youtubeSettingsButton) {
                    youtubeSettingsButton.insertAdjacentHTML(
                        'beforebegin',
                        '<a href="https://gotosettings.local" class="afv-settings-button"><svg enable-background="new 0 0 48 48" height="24px" version="1.1" viewBox="0 0 48 48" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M26,48h-4c-1.654,0-3-1.346-3-3v-3.724c-1.28-0.37-2.512-0.881-3.681-1.527l-2.634,2.635     c-1.134,1.134-3.109,1.132-4.243,0l-2.829-2.828c-0.567-0.566-0.879-1.32-0.879-2.121s0.312-1.555,0.879-2.121l2.635-2.636     c-0.645-1.166-1.156-2.398-1.525-3.679H3c-1.654,0-3-1.346-3-3v-4c0-0.802,0.312-1.555,0.878-2.121     c0.567-0.566,1.32-0.879,2.122-0.879h3.724c0.37-1.278,0.88-2.511,1.526-3.679l-2.634-2.635c-1.17-1.17-1.17-3.072,0-4.242     l2.828-2.829c1.133-1.132,3.109-1.134,4.243,0l2.635,2.635C16.49,7.604,17.722,7.093,19,6.724V3c0-1.654,1.346-3,3-3h4     c1.654,0,3,1.346,3,3v3.724c1.28,0.37,2.512,0.881,3.678,1.525l2.635-2.635c1.134-1.132,3.109-1.134,4.243,0l2.829,2.828     c0.567,0.566,0.879,1.32,0.879,2.121s-0.312,1.555-0.879,2.121l-2.634,2.635c0.646,1.168,1.157,2.4,1.526,3.68H45     c1.654,0,3,1.346,3,3v4c0,0.802-0.312,1.555-0.878,2.121s-1.32,0.879-2.122,0.879h-3.724c-0.37,1.28-0.881,2.513-1.526,3.68     l2.634,2.635c1.17,1.17,1.17,3.072,0,4.242l-2.828,2.829c-1.134,1.133-3.109,1.133-4.243,0L32.68,39.75     c-1.168,0.646-2.401,1.156-3.679,1.526V45C29,46.654,27.655,48,26,48z M15.157,37.498c0.179,0,0.36,0.048,0.521,0.146     c1.416,0.866,2.949,1.502,4.557,1.891C20.684,39.644,21,40.045,21,40.507V45c0,0.552,0.449,1,1,1h4c0.551,0,1-0.448,1-1v-4.493     c0-0.462,0.316-0.863,0.765-0.972c1.606-0.389,3.139-1.023,4.556-1.89c0.396-0.241,0.902-0.18,1.229,0.146l3.178,3.179     c0.375,0.374,1.039,0.376,1.415,0l2.828-2.829c0.39-0.39,0.39-1.024,0-1.414l-3.179-3.179c-0.327-0.326-0.387-0.835-0.146-1.229     c0.865-1.414,1.5-2.947,1.889-4.556c0.108-0.449,0.51-0.766,0.972-0.766H45c0.267,0,0.519-0.104,0.708-0.293     C45.896,26.518,46,26.267,46,25.999v-4c0-0.552-0.449-1-1-1h-4.493c-0.462,0-0.864-0.316-0.972-0.766     c-0.388-1.607-1.023-3.14-1.889-4.556c-0.241-0.394-0.181-0.901,0.146-1.229l3.179-3.179c0.186-0.187,0.293-0.444,0.293-0.707     s-0.107-0.521-0.293-0.707l-2.829-2.828c-0.378-0.377-1.037-0.377-1.415,0l-3.179,3.179c-0.326,0.328-0.833,0.389-1.229,0.146     c-1.413-0.864-2.945-1.5-4.554-1.889C27.317,8.356,27,7.955,27,7.493V3c0-0.552-0.449-1-1-1h-4c-0.551,0-1,0.448-1,1v4.493     c0,0.462-0.316,0.863-0.765,0.972c-1.606,0.388-3.139,1.023-4.556,1.889c-0.395,0.241-0.902,0.181-1.228-0.146l-3.179-3.179     c-0.378-0.377-1.037-0.377-1.415,0L7.03,9.857c-0.39,0.39-0.39,1.024,0,1.414l3.179,3.179c0.327,0.326,0.387,0.835,0.146,1.229     c-0.866,1.416-1.501,2.949-1.889,4.555c-0.108,0.449-0.51,0.766-0.972,0.766H3c-0.267,0-0.519,0.104-0.708,0.293     C2.104,21.48,2,21.731,2,21.999v4c0,0.552,0.449,1,1,1h4.493c0.462,0,0.864,0.316,0.972,0.766     c0.389,1.608,1.024,3.141,1.889,4.555c0.241,0.394,0.181,0.901-0.146,1.229l-3.179,3.18c-0.186,0.187-0.293,0.444-0.293,0.707     s0.107,0.521,0.293,0.707l2.829,2.828c0.377,0.377,1.037,0.377,1.415,0l3.178-3.179C14.643,37.598,14.898,37.498,15.157,37.498z"/></g><g><path d="M24,34c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S29.515,34,24,34z M24,16c-4.411,0-8,3.589-8,8     s3.589,8,8,8s8-3.589,8-8S28.412,16,24,16z"/></g></g></g></svg> Addiction Free Video Settings</a>'
                    );
                }
            }

            //Insert Start Page Custom Content (Donation Button)
            var afvStartPageContent = document.querySelector('.afv-start-page-content');
            if (!afvStartPageContent) {
                var startPageContent = document.querySelector('div[tab-identifier="FEwhat_to_watch"]');
                if (startPageContent) {
                    startPageContent.insertAdjacentHTML('beforebegin', '<a href="https://www.addiction-free-video.github.com/donate.html" class="afv-start-page-content">Support the creator by donating</a>');
                }
            }

            //Disable Autoplay
            var autoplayButton = document.querySelector('.ytm-autonav-toggle button');
            if (autoplayButton && AFV_disableAutoplay) {
                if (autoplayButton.getAttribute('aria-pressed') == 'true') {
                    autoplayButton.click();
                }
            }

            //Find Video Element and add event listners for media controls
            newVideoElement = document.querySelector('video');
            if (newVideoElement && AFV_videoElement !== newVideoElement) {
                try {
                    AFV_videoElement.removeEventListener('pause', AFV_videoChangeEvent);
                    AFV_videoElement.removeEventListener('play', AFV_videoChangeEvent);
                } catch (error) {
                    //DoNothing
                }

                AFV_videoElement = newVideoElement;

                AFV_videoElement.addEventListener('pause', AFV_videoChangeEvent);
                AFV_videoElement.addEventListener('play', AFV_videoChangeEvent);
            }
        }
    }

    if (typeof AFV_sheduleYoutubeManipulations === 'undefined') {
        // Shedule Youtube Manipulations multiple times, so even on slower phones everything gets displayed
        function AFV_sheduleYoutubeManipulations() {
            AFV_doYoutubeManipulations();

            setTimeout(() => {
                AFV_doYoutubeManipulations();
            }, 1000);

            setTimeout(() => {
                AFV_doYoutubeManipulations();
            }, 3000);

            setTimeout(() => {
                AFV_doYoutubeManipulations();
            }, 6000);

            setTimeout(() => {
                AFV_doYoutubeManipulations();
            }, 10000);
        }
    }

    if (typeof AFV_onPageChanged === 'undefined') {
        // Trigger Manipulations only when URL changes
        function AFV_onPageChanged() {
            if (currentYoutubeUrl !== location.href) {
                AFV_sheduleYoutubeManipulations();
            }
            currentYoutubeUrl = location.href;
        }
    }

    if (typeof AFV_openYoutubeWindow === 'undefined') {
        function AFV_openYoutubeWindow() {
            // Tell cordova that javascript was laodad successfully and to show the inAppBrwoser (hidden by default)
            AFV_sendPostMessage('open');
        }
    }

    if (typeof AFV_toggleVideo === 'undefined') {
        // Function that will be called later when user clicks on play/pause in media controls in notifications
        function AFV_toggleVideo(methode) {
            var videoElement = document.querySelector('video');
            if (videoElement) {
                switch (methode) {
                    case 'play':
                        videoElement.play();
                        break;

                    default:
                        videoElement.pause();
                        break;
                }
            }
        }
    }

    ////////////////////
    // Event Listners
    //////////////////
    if (startTabButton) {
        startTabButton.addEventListener('click', AFV_sheduleYoutubeManipulations);
    }

    if (youtubeLogo) {
        youtubeLogo.addEventListener('click', AFV_sheduleYoutubeManipulations);
    }

    window.addEventListener('popstate', AFV_onPageChanged);

    window.addEventListener('hashchange', AFV_onPageChanged);

    document.body.addEventListener(
        'click',
        () => {
            requestAnimationFrame(() => {
                AFV_onPageChanged();
            });
        },
        true
    );

    ////////////////////
    // Initial Funciton Execution
    //////////////////
    AFV_sheduleYoutubeManipulations();
    AFV_openYoutubeWindow();
} catch (error) {
    alert(error);
    //do nothing
}
