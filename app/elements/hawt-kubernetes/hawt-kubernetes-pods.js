(() => {
  Polymer('hawt-kubernetes-pods', {
    ready: function() {
      this.namespacesCollection = new Namespaces();
      this.podsCollection = new Pods();

      this.podsCollection.on('sync', this.updatePods, this);
      this.namespacesCollection.on('sync', this.updateNamespaces, this);

      this.namespacesCollection.fetch();
    },
    updatePods: function() {
      this.pods = this.podsCollection.models;
    },
    updateNamespaces: function() {
      this.namespaces = this.namespacesCollection.models;
      if (!this.selectedNamespace && this.namespaces && this.namespaces.length > 0) {
        this.selectedNamespace = this.namespaces[0];
        this.selectedNamespaceId = this.namespaces[0].id;
      }
    },
    selectedNamespaceChanged: function(oldVal, newVal) {
      this.pods = [];
      if (newVal.namespace) {
        this.podsCollection.fetch({data: {namespace: newVal.namespace.id}});
      }
    }
  });
})();
