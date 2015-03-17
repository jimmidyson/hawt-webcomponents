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
  }];

  Polymer('hawt-kubernetes-perspective', {
    ready: function() {
      this.$.perspectives.addPerspective(perspective);
    }
  });

  if (!document.querySelector('hawt-kubernetes-perspective')) {
    var p = document.createElement('hawt-kubernetes-perspective');
    document.body.insertBefore(p, document.body.lastChild);
  }
})();
