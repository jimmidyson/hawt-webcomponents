(() => {
  var perspectives = [];
  var perspectivesMap = {};

  var hawtPerspectives = {
    ready: function() {
      this.perspectives = perspectives;
    },
    getPerspective: function(id) { return perspectivesMap[id]; },
    addPerspective: function(perspective) {
      if (perspectivesMap[perspective.id]) {
        console.error("Perspective has already been added with id: " + perspective.id);
      } else {
        perspectives.push(perspective);
        perspectivesMap[perspective.id] = perspective;
      }
    }
  };

  Polymer('hawt-perspectives', hawtPerspectives);
})();
