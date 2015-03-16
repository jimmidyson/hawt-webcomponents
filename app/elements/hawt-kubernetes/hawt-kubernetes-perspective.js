(() => {
  var perspective = {
    id: 'kubernetes',
    label: 'Kubernetes',
    href: '/kubernetes',
    element: 'hawt-kubernetes-pods',
    path: '/kubernetes',
    image: '/images/kubernetes.svg'
  };

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
