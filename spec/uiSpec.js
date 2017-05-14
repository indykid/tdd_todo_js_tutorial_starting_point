describe('Ui', function() {
  require('jsdom-global')();
  var $    = require('jquery'),
      Ui   = require('../lib/ui'),
      Todo = require('../lib/todo');

  var $todoList,
      $todoSection,
      $newTodo;

  var todoAppTemplate = '<section id="todoapp">' +
                          '<header id="header">' +
                            '<h1>todos</h1>' +
                            '<input id="new-todo" placeholder="What needs to be done?" autofocus>' +
                          '</header>' +
                          '<section id="main" style="display:none;">' +
                            '<input id="toggle-all" type="checkbox">' +
                            '<label for="toggle-all">Mark all as complete</label>' +
                            '<ul id="todo-list"></ul>' +
                          '</section>' +
                          '<footer id="footer"></footer>' +
                        '</section>'

  beforeEach(function() {
    Todo.deleteAll();
    $("body").empty();
    $("body").append(todoAppTemplate);
    $todoSection = $('#main');
    $todoList    = $('#todo-list');
    $newTodo     = $('#new-todo');
  });

  it('renders no items when there are none', function() {
    Ui.init(Todo);
    expect($todoList.children().length).toBe(0);
    expect($todoSection.css('display')).toBe('none');
  });
});
