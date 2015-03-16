(() => {
  Polymer('hawt-kubernetes-pods', {
    ready: function() {
      this.podsCollection = new Pods();

      this.podsCollection.on({'fetch': this.update()});

      this.podsCollection.fetch();
    },
    update: function() {
      this.pods = this.podsCollection.models;
    }
  });
})();
