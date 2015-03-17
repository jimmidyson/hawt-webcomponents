((document) => {
  var template = document.querySelector('#app');

  template.addEventListener('template-bound', function() {
    template.perspectives = this.$.perspectives.perspectives;

    template.branding = window.Branding;

    var tmpPages = _.chain(template.perspectives)
                    .pluck('pages')
                    .flatten()
                    .sortBy(function(p) {return -((p.href || p.redirect).length);})
                    .value();
    var hrefOrRedirect = 'href';
    for (var i = 0; i < tmpPages.length; i++) {
      var href = tmpPages[i].href;
      if (!href) {
        href = tmpPages[i].redirect;
        hrefOrRedirect = 'redirect';
      }
      if (location.pathname.slice(0, href.length) === href) {
        template.currentPage = tmpPages[i];
        break;
      }
    }

    if (!template.currentPage) {
      template.currentPage = template.perspectives[0].pages[0];
    }

    var appRouterHtml = '<app-router mode="pushstate" trailingSlash="ignore" init="manual" id="pagesRouter">';
    for (let page of tmpPages) {
      appRouterHtml += `<app-route path="${page.path}" element="${page.element}"></app-route>`
    }
    appRouterHtml += '</app-router>';

    $('#main').html(appRouterHtml);

    template.router = document.querySelector('#pagesRouter');

    template.router.init();

    template.router.go(template.currentPage[hrefOrRedirect]);
  });

  template.pageTapped = function(event) {
    if (event.target.templateInstance.model.page && template.currentPage !== event.target.templateInstance.model.page) {
      if (this.$) {
        this.$.drawerPanel.togglePanel();
      }
      template.currentPage = event.target.templateInstance.model.page;
      template.router.go(template.currentPage.href || template.currentPage.redirect);
    }
  };
})(wrap(document));
