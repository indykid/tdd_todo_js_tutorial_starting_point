describe('TodoStore', function() {
  var Items = require('../lib/todoStore');

  beforeEach(function() {
    Items.deleteAll();
  });

  it('has no items at the start', function() {
    expect(Items.count()).toBe(0);
  });

  it('knows the amount of items', function() {
    var itemData = {property: 'value'};

    Items.add(itemData);

    expect(Items.count()).toBe(1);
  });

  it('adds items', function() {
    var itemData = {property: 'value'};

    Items.add(itemData);

    expect(Items.count()).toBe(1);
  });

  it('deletes all items', function() {
    var itemData = {property: 'value'};
    Items.add(itemData);

    Items.deleteAll();

    expect(Items.count()).toBe(0);
  });

  it('assigns id when adding an item', function() {
    var itemData = {property: 'value'};

    Items.add(itemData);

    expect(Items.all()[0].id).toBeDefined();
  });

  it('finds an item', function() {
    var itemData = {property: 'value'};
    Items.add(itemData);
    var item = Items.all()[0];

    expect(Items.findById(item.id)).toEqual(item);
  });

  it('returns all items', function() {
    var itemData1 = {property: 'value'};
    var itemData2 = {property: 'another value'};

    Items.add(itemData1);
    Items.add(itemData2);

    expect(Items.all().length).toBe(2);
  });

  it('deletes an item', function(){
    var itemData1 = {id: 10};
    var itemData2 = {id: 20};
    Items.add(itemData1);
    Items.add(itemData2);

    Items.delete(itemData2.id);

    expect(Items.count()).toBe(1);
    expect(Items.all()[0].id).toBe(itemData1.id);
  });

  it('updates an item', function() {
    var itemData = {property: 'value'};
    Items.add(itemData);
    var newData = {property: 'new value'}
    var item = Items.all()[0]

    Items.update(item.id, newData);

    expect(Items.all()[0].property).toEqual(newData.property);
  });

  it('returns active items only', function() {
    var property  = 'property',
        value     = 'value',
        itemData1 = {isCompleted: false};
        itemData2 = {isCompleted: true};
    Items.add(itemData1);
    var activeItem = Items.all()[0];
    Items.add(itemData2);

    expect(Items.active()).toEqual([activeItem]); 
  });

  it('returns completed items only', function() {
    var itemData1 = {isCompleted: true},
        itemData2 = {isCompleted: false};
    Items.add(itemData1);
    var comletedItem = Items.all()[0];
    Items.add(itemData2);

    expect(Items.completed()).toEqual([comletedItem]); 
  });
});
