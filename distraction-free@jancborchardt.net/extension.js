// Copyright (c) 2012 Jan-Christoph Borchardt, http://jancborchardt.net
// freely licensed under MIT

const Overview = imports.ui.main.overview;
const Panel = imports.ui.main.panel;
const MessageTray = imports.ui.main.messageTray;

let showID, hideID;

function init() {
}

function enable() {
    hideDistractions();
    Panel._activitiesButton.actor.hide();
    hideID = Overview.connect('hiding', hideDistractions);
    showID = Overview.connect('showing', showDistractions);
}

function disable() {
    Overview.disconnect(showID);
    Overview.disconnect(hideID);
    showDistractions();
    Panel._activitiesButton.actor.show();
}

function hideDistractions() {
    Panel.actor.hide();
    MessageTray.actor.hide()
}

function showDistractions() {
    Panel.actor.show();
    MessageTray.actor.show()
}
