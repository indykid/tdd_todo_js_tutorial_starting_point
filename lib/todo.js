var Todo = function(TodoStore) {

  return {
    all: function() {
      return TodoStore.all();
    },

    add: function(data) {
      TodoStore.add(data);
    },

    findById: function(id) {
      return TodoStore.findById(id);
    },

    markAsComplete: function(id) {
      TodoStore.update(id, {isCompleted: true});
    },

    markAsActive: function(id) {
      TodoStore.update(id, {isCompleted: false});
    },

    active: function() {
      TodoStore.active();
    },

    completed: function() {
      TodoStore.completed();
    },

    delete: function(id) {
      TodoStore.delete(id);
    },

    deleteAll: function() {
      TodoStore.deleteAll();
    }
  }
};

module.exports = Todo;
