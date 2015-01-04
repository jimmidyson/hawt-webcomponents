(function() {
  if ('registerElement' in document
    && 'createShadowRoot' in HTMLElement.prototype
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template')) {
  } else {
    document.write('<script src="/bower_components/webcomponentsjs/webcomponents.min.js"><\/script>');
  }
})();
