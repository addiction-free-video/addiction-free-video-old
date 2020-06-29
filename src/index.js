/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import openYoutube from './openYoutube';

var app = {
    currentRef: undefined,

    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        this.onYoutubeLinkOpended.bind(this);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        // Set inital settings values if no settings are stored yet
        if (!window.localStorage.getItem('settings')) {
            const settings = {
                hideStartPage: true,
                hideTrendingTab: true,
                hideViedoRecommendations: true,
                hideLikeCount: true,
                hideViews: true,
                hideCommentCount: true,
                hideSubscriberCount: true,
                saveCountdown: 30,
                disableAutoplay: true,
            };

            window.localStorage.setItem('settings', JSON.stringify(settings));
        }

        // Open Youtube
        this.currentRef = openYoutube();

        // Allow user to click on the laoding screen to open youtube if it doesn't automatically
        const appElement = document.querySelector('.app');
        if (appElement) {
            appElement.addEventListener('click', function () {
                this.currentRef = openYoutube();
            });
        }

        // Init Universial Links
        universalLinks.subscribe(null, this.onYoutubeLinkOpended);
    },

    onYoutubeLinkOpended: function (eventData) {
        this.currentRef = openYoutube(eventData.url);
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};

app.initialize();
