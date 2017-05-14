var Todo = (function() {
  var items = [];
  var nextId = 100;

  return {
    count: function() {
      return items.length;
    },

    all: function() {
      return items;
    },

    add: function(itemData) {
      items.push(createItem(itemData));
    },

    findById: function(id) {
      return findById(id);
    },

    markAsCompleted: function(itemId) {
      update(itemId, {isCompleted: true});
    },

    markAsActive: function(itemId) {
      update(itemId, {isCompleted: false});
    },

    active: function() {
      return filterBy('isCompleted', false);
    },

    completed: function() {
      return filterBy('isCompleted', true);
    },

    delete: function(id) {
      var index = items.findIndex(function(item) {
        return id === item.id;
      });
      items.splice(index, 1);
    },

    deleteAll: function() {
      items = [];
    },
  }

  function createItem(itemData) {
    var item = {id: nextId++};
    return Object.assign(item, itemData);
  };

  function filterBy(property, value) {
    return items.filter(function(item) {
      return item[property] === value;
    });
  };

  function findById(id) {
    return items.find(function(item) {
      return item.id === id;
    });
  };

  function update(id, data) {
    var item = findById(id);

    Object.getOwnPropertyNames(data).forEach(function(property) {
      item[property] = data[property];
    });
  };
})();

if (typeof module !== 'undefined') {
  module.exports = Todo;
};
