(function(document) {
  'use strict';

  var template = document.querySelector('#t');

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');

    template.perspectives = [
      {label: "Fabric8", href: '/', page: '/pages/home-page.html', path: '/', image: 'https://issues.jboss.org/secure/attachment/12384407/fabric8_500x400.png'},
      {label: "Demo", href: '/demo/1234', page: '/pages/demo-page.html', icon: 'accessibility', path: '/demo/:pathArg1'}
    ];

    template.appRouterStateChange = function(event) {
      var tmpPerspectives = _.sortBy(template.perspectives, function(p) {return -(p.href.length);});
      for (var i = 0; i < tmpPerspectives.length; i++) {
        if (event.detail.path.slice(0, tmpPerspectives[i].href.length) === tmpPerspectives[i].href) {
          template.currentPerspective = tmpPerspectives[i];
          return;
        }
      }
    }
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
