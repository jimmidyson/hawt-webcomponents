class KubernetesCollection extends Backbone.Collection {
  constructor(args) {
    super(args);
    this.parse = (response) => {
      return response.items;
    };
  }
}

class Namespace extends Backbone.Model {
  constructor (args) {
    super(args)

    Object.defineProperty(this, "uid", {
      get: function (){ return this.get("uid")} ,
      set: function (value) { this.set("uid",value); }
    });
  }
}

class Namespaces extends KubernetesCollection {
  constructor(args) {
    super(args);
    this.model = Namespace;
    this.url = window.KUBERNETES_CONFIG.baseUrl + '/api/v1beta2/namespaces';
  }
}

class Pod extends Backbone.Model {
  constructor (args) {
    super(args)

    Object.defineProperty(this, "uid", {
      get: function (){ return this.get("uid")} ,
      set: function (value) { this.set("uid",value); }
    });

    Object.defineProperty(this, "namespace", {
      get: function (){ return this.get("namespace")} ,
      set: function (value) { this.set("namespace",value); }
    });

    Object.defineProperty(this, "currentState", {
      get: function (){ return this.get("currentState")} ,
      set: function (value) { this.set("currentState",value); }
    });
  }
}

class Pods extends KubernetesCollection {
  constructor(args) {
    super(args);
    this.model = Pod;
    this.url = window.KUBERNETES_CONFIG.baseUrl + '/api/v1beta2/pods';
  }
}

(() => {
  Polymer('hawt-kubernetes-model', {});
})();
