(function(document) {
  'use strict';

  var template = document.querySelector('#t');

  template.addEventListener('template-bound', function(e) {
    template.perspectives = window.Perspectives;

    template.branding = window.Branding;

    template.router = document.querySelector('#perspectiveRouter');

    var tmpPerspectives = _.sortBy(template.perspectives, function(p) {return -(p.href.length);});
    for (var i = 0; i < tmpPerspectives.length; i++) {
      if (location.pathname.slice(0, tmpPerspectives[i].href.length) === tmpPerspectives[i].href) {
        template.currentPerspective = tmpPerspectives[i];
        break;
      }
    }

    template.selectedPerspectiveIndex = _.indexOf(_.pluck(template.perspectives, 'href'), template.currentPerspective.href);
  });

  template.onPerspectiveSelect = function(event, detail) {
    if (detail.isSelected) {
      this.$ && this.$.drawerPanel.togglePanel();
      template.currentPerspective = detail.item.templateInstance.model.perspective;
      if (location.pathname === template.currentPerspective.href) {
        template.router.go(template.currentPerspective.href);
      }
    }
  }

  template.onPerspectiveTapped = function(event, detail) {
    template.router.go(template.currentPerspective.href);
  }

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
