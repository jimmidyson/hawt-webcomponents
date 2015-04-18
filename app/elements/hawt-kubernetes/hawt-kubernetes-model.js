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

class Service extends Backbone.Model {
  constructor (args) {
    super(args)

    Object.defineProperty(this, "uid", {
      get: function (){ return this.get("uid")} ,
      set: function (value) { this.set("uid",value); }
    });

    Object.defineProperty(this, "id", {
      get: function (){ return this.get("id")} ,
      set: function (value) { this.set("id",value); }
    });

    Object.defineProperty(this, "namespace", {
      get: function (){ return this.get("namespace")} ,
      set: function (value) { this.set("namespace",value); }
    });

    Object.defineProperty(this, "port", {
      get: function (){ return this.get("port")} ,
      set: function (value) { this.set("port",value); }
    });

    Object.defineProperty(this, "containerPort", {
      get: function (){ return this.get("containerPort")} ,
      set: function (value) { this.set("containerPort",value); }
    });

    Object.defineProperty(this, "protocol", {
      get: function (){ return this.get("protocol")} ,
      set: function (value) { this.set("protocol",value); }
    });

    Object.defineProperty(this, "selector", {
      get: function (){ return this.get("selector")} ,
      set: function (value) { this.set("selector",value); }
    });

    Object.defineProperty(this, "portalIP", {
      get: function (){ return this.get("portalIP")} ,
      set: function (value) { this.set("portalIP",value); }
    });
  }
}

class Services extends KubernetesCollection {
  constructor(args) {
    super(args);
    this.model = Service;
    this.url = window.KUBERNETES_CONFIG.baseUrl + '/api/v1beta2/services';
  }
}

class ReplicationController extends Backbone.Model {
  constructor (args) {
    super(args)

    Object.defineProperty(this, "uid", {
      get: function (){ return this.get("uid")} ,
      set: function (value) { this.set("uid",value); }
    });

    Object.defineProperty(this, "id", {
      get: function (){ return this.get("id")} ,
      set: function (value) { this.set("id",value); }
    });

    Object.defineProperty(this, "namespace", {
      get: function (){ return this.get("namespace")} ,
      set: function (value) { this.set("namespace",value); }
    });

    Object.defineProperty(this, "desiredState", {
      get: function (){ return this.get("desiredState")} ,
      set: function (value) { this.set("desiredState",value); }
    });

    Object.defineProperty(this, "currentState", {
      get: function (){ return this.get("desiredState")} ,
      set: function (value) { this.set("desiredState",value); }
    });

    Object.defineProperty(this, "labels", {
      get: function (){ return this.get("labels")} ,
      set: function (value) { this.set("labels",value); }
    });
  }
}

class ReplicationControllers extends KubernetesCollection {
  constructor(args) {
    super(args);
    this.model = ReplicationController;
    this.url = window.KUBERNETES_CONFIG.baseUrl + '/api/v1beta2/replicationControllers';
  }
}

(() => {
  Polymer('hawt-kubernetes-model', {});
})();
