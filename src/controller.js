class Controller {
  constructor(modal, view) {
    this.modal = modal;
    this.view = view;

    view.on('add', this.addTodo.bind(this));
    view.on('toggle', this.toggleTodo.bind(this));
    view.on('edit', this.editTodo.bind(this));
    view.on('remove', this.removeTodo.bind(this));
  }

  addTodo(title) {
    const todo = this.modal.addItem({
      id: Data.now(),
      title,
      completed: false
    });

    this.view.addItem(todo);
  }
}