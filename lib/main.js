const { ToggleButton } = require('sdk/ui/button/toggle');
const { Hotkey } = require("sdk/hotkeys");
const tabs = require("sdk/tabs");

function showPanel() {
  let twitter_uri = "https://twitter.com/intent/tweet?url=" +
    encodeURIComponent(tabs.activeTab.url) +
    "&text=" + encodeURIComponent(tabs.activeTab.title);
  panel.contentURL = twitter_uri;
  panel.show({ position: button });
}

let button = ToggleButton({
  id: "tweet-that",
  label: "Tweet that link",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: showPanel
});

let panel = require("sdk/panel").Panel({
  width: 320,
  height: 250,
  onHide: function() {
    button.state('window', {checked: false});
  }
});

let showHotKey = Hotkey({
  combo: "accel-alt-t",
  onPress: showPanel
});
