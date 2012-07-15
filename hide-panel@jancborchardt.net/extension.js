// Copyright (c) 2012 Jan-Christoph Borchardt, http://jancborchardt.net
// freely licensed under MIT

const Overview = imports.ui.main.overview;
const Panel = imports.ui.main.panel.actor;

function init() {
}

function enable() {
    hidePanel();
    Overview.connect('hiding', hidePanel);
    Overview.connect('showing', showPanel);
}

function disable() {
    showPanel();
    Overview.disconnect(Overview.connect('hiding', hidePanel));
    Overview.disconnect(Overview.connect('showing', showPanel));
}

function hidePanel() {
    Panel.hide();
}

function showPanel() {
    Panel.show();
}
