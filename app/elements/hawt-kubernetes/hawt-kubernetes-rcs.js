(() => {
  Polymer('hawt-kubernetes-rcs', {
    ready: function() {
      this.namespacesCollection = new Namespaces();
      this.rcsCollection = new ReplicationControllers();

      this.rcsCollection.on('sync', this.updateReplicationControllers, this);
      this.namespacesCollection.on('sync', this.updateNamespaces, this);

      this.namespacesCollection.fetch();
    },
    updateReplicationControllers: function() {
      this.rcs = this.rcsCollection.models;
    },
    updateNamespaces: function() {
      this.namespaces = this.namespacesCollection.models;
      if (!this.selectedNamespace && this.namespaces && this.namespaces.length > 0) {
        this.selectedNamespace = this.namespaces[0];
        this.selectedNamespaceId = this.namespaces[0].id;
      }
    },
    selectedNamespaceChanged: function(oldVal, newVal) {
      this.rcs = [];
      if (newVal.namespace) {
        this.rcsCollection.fetch({data: {namespace: newVal.namespace.id}});
      }
    }
  });
})();
