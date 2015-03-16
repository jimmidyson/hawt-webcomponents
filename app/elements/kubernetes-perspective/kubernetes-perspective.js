(() => {
  var perspective = {
    id: 'kubernetes',
    label: 'Kubernetes',
    href: '/kubernetes',
    element: 'kubernetes-overview',
    path: '/kubernetes',
    image: '/images/kubernetes.svg'
  };

  Polymer({
    ready: function() {
      this.$.perspectives.addPerspective(perspective);
    }
  });

  if (!document.querySelector('kubernetes-perspective')) {
    var p = document.createElement('kubernetes-perspective');
    document.body.insertBefore(p, document.body.lastChild);
  }
})();
