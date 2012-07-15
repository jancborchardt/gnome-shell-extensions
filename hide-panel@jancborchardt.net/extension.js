// Copyright (c) 2012 Jan-Christoph Borchardt, http://jancborchardt.net
// freely licensed under MIT

const Overview = imports.ui.main.overview;
const Panel = imports.ui.main.panel;

function init() {
}

function enable() {
    hidePanel();
    Panel._activitiesButton.actor.hide();
    Overview.connect('hiding', hidePanel);
    Overview.connect('showing', showPanel);
}

function disable() {
    showPanel();
    Panel._activitiesButton.actor.show();
    Overview.disconnect(Overview.connect('hiding', hidePanel));
    Overview.disconnect(Overview.connect('showing', showPanel));
}

function hidePanel() {
    Panel.actor.hide();
}

function showPanel() {
    Panel.actor.show();
}
