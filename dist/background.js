chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: "hawtiov2",
    innerBounds: {
      width: 700,
      height: 600
    }
  });
});
