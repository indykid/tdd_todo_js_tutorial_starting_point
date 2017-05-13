var Todo = (function() {
  var items = [];

  var Items = (function() {

  })();

  return {
    all: function() {
      return items;
    },

    add: function(item) {
      items.push(item);
    },

    findById: function(id) {
      return items.find(function(item) {
        return item.id === id;
      });
    },

    complete: function(id) {
      updateItem(this.findById(id), {isCompleted: true});
    },

    markAsActive: function(id) {
      updateItem(this.findById(id), {isCompleted: false});
    },

    delete: function(itemToDelete) {
      var index = items.findIndex(function(item) {
        return itemToDelete.id === item.id;
      });
      items.splice(index, 1);
    },

    deleteAll: function() {
      items = [];
    }
  }

  function updateItem(item, options) {
    Object.getOwnPropertyNames(options).forEach(function(property) {
      item[property] = options[property];
    });
  }
})();

module.exports = Todo;
