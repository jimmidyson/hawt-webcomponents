Polymer('yo-greeting', {
  greeting: '\'hello',
  greetingChanged(oldValue, newValue) {
    console.log(oldValue);
    console.log(newValue);
  }
});
