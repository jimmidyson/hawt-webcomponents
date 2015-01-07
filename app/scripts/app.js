(function(document) {
  'use strict';

  var template = document.querySelector('#t');

  template.addEventListener('template-bound', function() {
    template.perspectives = this.$.perspectives.perspectives;

    template.branding = window.Branding;

    template.router = document.querySelector('#perspectiveRouter');

    template.router.init();

    var tmpPerspectives = _.sortBy(template.perspectives, function(p) {return -((p.href || p.redirect).length);});
    var hrefOrRedirect = 'href';
    for (var i = 0; i < tmpPerspectives.length; i++) {
      var href = tmpPerspectives[i].href;
      if (!href) {
        href = tmpPerspectives[i].redirect;
        hrefOrRedirect = 'redirect';
      }
      if (location.pathname.slice(0, href.length) === href) {
        template.currentPerspective = tmpPerspectives[i];
        break;
      }
    }

    if (template.currentPerspective) {
      template.selectedPerspectiveIndex = _.indexOf(_.pluck(template.perspectives, hrefOrRedirect), template.currentPerspective[hrefOrRedirect]);
    } else {
      template.currentPerspective = template.perspectives[0];
      template.selectedPerspectiveIndex = 0;
    }
  });

  template.onPerspectiveSelect = function(event, detail) {
    if (detail.isSelected) {
      if (this.$) {
        this.$.drawerPanel.togglePanel();
      }
      template.currentPerspective = detail.item.templateInstance.model.perspective;
    }
    template.router.go(template.currentPerspective.href || template.currentPerspective.redirect);
  };

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
