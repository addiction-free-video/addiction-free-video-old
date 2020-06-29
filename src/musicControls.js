export default () => {
    MusicControls.create({
        track: 'Addiction Free Video', // optional, default : ''

        // hide previous/next/close buttons:
        hasPrev: false, // show previous button, optional, default: true
        hasNext: false, // show next button, optional, default: true
        hasClose: true, // show close button, optional, default: false

        //All icons default to their built-in android equivalents
        //The supplied drawable name, e.g. 'media_play', is the name of a drawable found under android/res/drawable* folders
        playIcon: 'media_play',
        pauseIcon: 'media_pause',
        prevIcon: 'media_prev',
        nextIcon: 'media_next',
        closeIcon: 'media_close',
        notificationIcon: 'notification',
    });
};
