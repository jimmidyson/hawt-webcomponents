(() => {
  Polymer('hawt-kubernetes-services', {
    ready: function() {
      this.namespacesCollection = new Namespaces();
      this.servicesCollection = new Services();

      this.servicesCollection.on('sync', this.updateServices, this);
      this.namespacesCollection.on('sync', this.updateNamespaces, this);

      this.namespacesCollection.fetch();
    },
    updateServices: function() {
      this.services = this.servicesCollection.models;
    },
    updateNamespaces: function() {
      this.namespaces = this.namespacesCollection.models;
      if (!this.selectedNamespace && this.namespaces && this.namespaces.length > 0) {
        this.selectedNamespace = this.namespaces[0];
        this.selectedNamespaceId = this.namespaces[0].id;
      }
    },
    selectedNamespaceChanged: function(oldVal, newVal) {
      this.services = [];
      if (newVal.namespace) {
        this.servicesCollection.fetch({data: {namespace: newVal.namespace.id}});
      }
    }
  });
})();
