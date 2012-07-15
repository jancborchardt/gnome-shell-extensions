// Copyright (c) 2012 Jan-Christoph Borchardt, http://jancborchardt.net
// freely licensed under MIT

const Overview = imports.ui.main.overview;
const Panel = imports.ui.main.panel;
const MessageTray = imports.ui.main.messageTray;

function init() {
}

function enable() {
    hideDistractions();
    Panel._activitiesButton.actor.hide();
    Overview.connect('hiding', hideDistractions);
    Overview.connect('showing', showDistractions);
}

function disable() {
    showDistractions();
    Panel._activitiesButton.actor.show();
    Overview.disconnect(Overview.connect('hiding', hideDistractions));
    Overview.disconnect(Overview.connect('showing', showDistractions));
}

function hideDistractions() {
    Panel.actor.hide();
    MessageTray.actor.hide()
}

function showDistractions() {
    Panel.actor.show();
    MessageTray.actor.show()
}
