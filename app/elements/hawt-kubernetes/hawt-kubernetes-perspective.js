(() => {
  var perspective = {
    id: 'kubernetes',
    label: 'Kubernetes',
    element: 'hawt-kubernetes-pods',
    image: '/images/kubernetes.svg',
  };
  perspective.pages = [{
    id: 'kubernetes-pods',
    label: 'Pods',
    href: '/kubernetes/pods',
    element: 'hawt-kubernetes-pods',
    path: '/kubernetes/pods',
  }, {
    id: 'kubernetes-services',
    label: 'Services',
    href: '/kubernetes/services',
    element: 'hawt-kubernetes-services',
    path: '/kubernetes/services',
  }, {
    id: 'kubernetes-rcs',
    label: 'RCs',
    href: '/kubernetes/rcs',
    element: 'hawt-kubernetes-rcs',
    path: '/kubernetes/rcs',
  }];

  Polymer('hawt-kubernetes-perspective', {
    ready: function() {
      this.$.perspectives.addPerspective(perspective);
    }
  });
})();
