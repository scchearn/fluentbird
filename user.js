// FluentBird theme requirements
// user.js is read on every Thunderbird startup and overrides prefs.js.
// Remove this file if you want UI-set preferences to persist.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Mica prefs disabled on Linux — they cause visual artifacts
user_pref("widget.windows.mica", false);
user_pref("widget.windows.mica.popups", 0);