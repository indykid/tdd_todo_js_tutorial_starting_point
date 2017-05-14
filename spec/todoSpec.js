describe('Todo', function() {
  var Todo,
      TodoStore;

  beforeEach(function() {
    TodoStore = {
      add: null,
      all: null,
      findById: null,
      update: null,
      active: null,
      completed: null,
      deleteAll: null,
      delete: null
    };
    Todo = require('../lib/todo')(TodoStore);
  });

  it('clears all items', function() {
    spyOn(TodoStore, 'deleteAll');

    Todo.deleteAll();

    expect(TodoStore.deleteAll).toHaveBeenCalled();
  });

  it('returns all items', function() {
    spyOn(TodoStore, 'all');

    Todo.all();

    expect(TodoStore.all).toHaveBeenCalled();
  });

  it('adds an item', function() {
    var dataStub = 'stub';
    spyOn(TodoStore, 'add');

    Todo.add(dataStub);

    expect(TodoStore.add).toHaveBeenCalledWith(dataStub);
  });

  it('finds an item', function() {
    var id = 10;
    spyOn(TodoStore, 'findById');

    Todo.findById(id);

    expect(TodoStore.findById).toHaveBeenCalledWith(id);
  });

  it('deletes an item', function(){
    var id = 10;
    spyOn(TodoStore, 'delete');

    Todo.delete(id);

    expect(TodoStore.delete).toHaveBeenCalledWith(id);
  });

  it('marks item complete', function() {
    var id = 10;
    spyOn(TodoStore, 'update');

    Todo.markAsComplete(id);

    expect(TodoStore.update).toHaveBeenCalledWith(id, {isCompleted: true});
  });

  it('marks item as active', function() {
    var id = 10;
    Todo = require('../lib/todo')(TodoStore);
    spyOn(TodoStore, 'update');

    Todo.markAsActive(id);

    expect(TodoStore.update).toHaveBeenCalledWith(id, {isCompleted: false});
  });

  it('gets active items', function() {
    spyOn(TodoStore, 'active');

    Todo.active();

    expect(TodoStore.active).toHaveBeenCalled();
  });

  it('gets completed items', function() {
    spyOn(TodoStore, 'completed');

    Todo.completed();

    expect(TodoStore.completed).toHaveBeenCalled();
  });
});
