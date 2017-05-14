describe('Todo', function() {
  var Todo = require('../lib/todo');

  beforeEach(function() {
    Todo.deleteAll();
  });

  it('has no items at the start', function() {
    expect(Todo.count()).toBe(0);
  });

  it('knows the amount of items', function() {
    var itemData = {property: 'value'};

    Todo.add(itemData);

    expect(Todo.count()).toBe(1);
  });

  it('adds items', function() {
    var itemData = {property: 'value'};

    Todo.add(itemData);

    expect(Todo.count()).toBe(1);
  });

  it('deletes all items', function() {
    var itemData = {property: 'value'};
    Todo.add(itemData);

    Todo.deleteAll();

    expect(Todo.count()).toBe(0);
  });

  it('assigns id when adding an item', function() {
    var itemData = {property: 'value'};

    Todo.add(itemData);

    expect(Todo.all()[0].id).toBeDefined();
  });

  it('finds an item', function() {
    var itemData = {property: 'value'};
    Todo.add(itemData);
    var item = Todo.all()[0];

    expect(Todo.findById(item.id)).toEqual(item);
  });

  it('returns all items', function() {
    var itemData1 = {property: 'value'};
    var itemData2 = {property: 'another value'};

    Todo.add(itemData1);
    Todo.add(itemData2);

    expect(Todo.all().length).toBe(2);
  });

  it('deletes an item', function(){
    var itemData1 = {id: 10};
    var itemData2 = {id: 20};
    Todo.add(itemData1);
    Todo.add(itemData2);

    Todo.delete(itemData2.id);

    expect(Todo.count()).toBe(1);
    expect(Todo.all()[0].id).toBe(itemData1.id);
  });

  it('marks item as completed', function() {
    var itemData = {property: 'value'};
    Todo.add(itemData);
    var item = Todo.all()[0]

    Todo.markAsCompleted(item.id);

    expect(Todo.findById(item.id).isCompleted).toBeTruthy();
  });

  it('marks item as active', function() {
    var itemData = {property: 'value'};
    Todo.add(itemData);
    var item = Todo.all()[0]

    Todo.markAsActive(item.id);

    expect(Todo.findById(item.id).isCompleted).toBeFalsy();
  });

  it('returns active items only', function() {
    var property  = 'property',
        value     = 'value',
        itemData1 = {isCompleted: false};
        itemData2 = {isCompleted: true};
    Todo.add(itemData1);
    var activeItem = Todo.all()[0];
    Todo.add(itemData2);

    expect(Todo.active()).toEqual([activeItem]);
  });

  it('returns completed items only', function() {
    var itemData1 = {isCompleted: true},
        itemData2 = {isCompleted: false};
    Todo.add(itemData1);
    var comletedItem = Todo.all()[0];
    Todo.add(itemData2);

    expect(Todo.completed()).toEqual([comletedItem]);
  });
});
