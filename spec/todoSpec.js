describe('Todo', function() {
  var Todo = require('../lib/todo');

  beforeEach(function() {
    Todo.deleteAll();
  });

  it('clears all items', function() {
    Todo.add({});

    Todo.deleteAll();

    expect(Todo.all().length).toBe(0);
  });

  it('returns no items when there are none', function(){
    expect(Todo.all().length).toBe(0); 
  });

  it('adds an item', function() {
    Todo.add({});

    expect(Todo.all().length).toBe(1);
  });

  it('finds an item', function() {
    var item = {id: 10};
    Todo.add(item);

    expect(Todo.findById(item.id)).toEqual(item);
  });

  it('deletes an item', function(){
    var item1 = {id: 10};
    var item2 = {id: 20};
    Todo.add(item1);
    Todo.add(item2);

    Todo.delete(item2);

    expect(Todo.all().length).toBe(1);
    expect(Todo.all()[0].id).toBe(item1.id);
  });

  it('completes an item', function() {
    var item = {id: 10};
    Todo.add(item);

    Todo.complete(item.id);

    foundItem = Todo.findById(item.id)
    expect(foundItem.isCompleted).toBeTruthy();
  });

  it('marks item as active', function() {
    var item = {id: 10};
    Todo.add(item);

    Todo.markAsActive(item.id);

    foundItem = Todo.findById(item.id)
    expect(foundItem.isCompleted).toBeFalsy();
  });
});
