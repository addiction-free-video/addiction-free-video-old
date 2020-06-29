export default () => {
    const settings = JSON.parse(window.localStorage.getItem('settings'));

    let css = '';

    if (settings?.hideStartPage) {
        css += `
            div[tab-identifier='FEwhat_to_watch'] {
                display: none;
            }
        `;
    }

    if (settings?.hideTrendingTab) {
        css += `
            ytm-pivot-bar-renderer[role="tablist"] ytm-pivot-bar-item-renderer:nth-child(2){
                display: none;
            }
        
            div[tab-identifier="FEtrending"] {
                display: none;
            }
        `;
    }

    if (settings?.hideViedoRecommendations) {
        css += `
            ytm-item-section-renderer[data-content-type='related'] {
                display: none;
            }
        `;
    }

    if (settings?.hideLikeButtons) {
        css += `
            .slim-video-metadata-actions c3-material-button:nth-child(1),
            .slim-video-metadata-actions c3-material-button:nth-child(2){
                display: none;
            }
        `;
    }

    if (settings?.hideLikeCount) {
        css += `
            .slim-video-metadata-actions c3-material-button:nth-child(1) div.button-renderer-text,
            .slim-video-metadata-actions c3-material-button:nth-child(2) div.button-renderer-text {
                display: none;
            }
        `;
    }

    if (settings?.hideViews) {
        css += `
            .slim-video-metadata-title-and-badges div {
                display: none;
            }

            ytm-compact-video-renderer a.compact-media-item-metadata-content div.subhead div:nth-last-child(2){
                display: none;
            }

            ytm-video-with-context-renderer div.details ytm-badge-and-byline-renderer span.ytm-badge-and-byline-item-byline.small-text:nth-child(3),
            ytm-video-with-context-renderer div.details ytm-badge-and-byline-renderer span.ytm-badge-and-byline-separator:nth-child(2)
            {
                display: none;
            }

            ytm-channel-about-metadata-renderer div p:nth-child(3){
                display: none;
            }
        `;
    }

    if (settings?.hideComments) {
        css += `
            ytm-comment-section-renderer {
                display: none;
            }
        `;
    }

    if (settings?.hideCommentCount) {
        css += `
            ytm-comment-section-renderer .comment-section-header-text {
                color: white;
                margin-bottom: -15px;
            }

            ytm-comment-section-renderer .comment-section-header-text strong::before {
                content: "Comments";
                display: block;
                position: relative;
                color: black;
            }
        `;
    }

    if (settings?.hideSubscriberCount) {
        css += `
            .slim-owner-bylines div.subhead {
                display: none;
            }

            .c4-tabbed-header-subscibe.cbox span.c4-tabbed-header-subscriber-count.secondary-text {
                display: none;
            }

            ytm-compact-channel-renderer a.compact-media-item-metadata-content div.subhead div:nth-child(2){
                display: none;
            }
        `;
    }

    if (settings?.hideSubscriptionFeed) {
        css += `
            div[tab-identifier="FEsubscriptions"] {
                display: none;
            }

            div.pivot-bar-item-tab.pivot-subs {
                display: none;
            }
        `;
    }

    if (settings?.customCSS) {
        css += settings?.customCSS;
    }

    //Css Without Condition
    css += `
    `;

    return css;
};
