// Copyright (c) 2012 Jan-Christoph Borchardt, http://jancborchardt.net
// freely licensed under MIT

const WorkspacesBox = imports.ui.workspaceThumbnail.ThumbnailsBox.prototype;

let oldWorkspacesBox;

function init() {
    oldWorkspacesBox = WorkspacesBox.show;
}

function enable() {
    WorkspacesBox.show = function() { };
}

function disable() {
    WorkspacesBox.show = oldWorkspacesBox;
}

// backwards compatibility with 3.0.2
function main() {
    enable();
}
