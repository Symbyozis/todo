import { createElement, EventEmitter } from './helpers.js'

class View extends EventEmitter { //наследуем класс eventemitter
  constructor() {
    super();

    this.form = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.list = document.getElementById('todo-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  createElement(todo) { //метод создания одной задачи с помощью импортированный функции
    const checkbox = this.createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : '' })
    const label = createElement('label', { className: 'title' }, todo.title);
    const editInput = createElement('input', { type: 'text', className: 'textfield' });
    const editButton = createElement('button', { className: 'edit' }, 'Изменить');
    const removeButton = createElement('button', { className: 'remove' }, 'Удалить');
    const item = createElement('li', { className: `todo-item${todo.completed ? 'complated' : ''}`, 'data-id': todo.id },
      checkbox, label, editInput, editButton, removeButton); //складываем все созданные элементы в этот задачу из листа

    return this.addEventListeners(item);
  }

  addEventListeners(item) { //подвешиваем события
    const checkbox = listItem.querySelector('.checkbox');
    const editButton = listItem.querySelector('button.edit');
    const removeButton = listItem.querySelector('button.remove');

    checkbox.addEventListener('change', this.handleToggle.bind(this)); //вызываем методы
    editButton.addEventListener('click', this.handleEdit.bind(this));
    removeButton.addEventListener('click', this.handleRemove.bind(this));

    return item;
  }

  handleToggle({ target }) { //событие: на проверку выполнена или нет
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    const completed = target.completed;

  }

  handleEdit({ target }) { //событие: изменяет задачу
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    const label = listItem.querySelector('.title');
    const input = querySelector('.textfield');
    const editButton = listItem.querySelector('button.edit');
    const title = input.value;
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {

    } else {
      input.value = label.textContent;
      editButton.textContent = 'Сохранить';
      listItem.classList.add('editing');
    }
  }

  handleRemove({ target }) { //событие: удаляет задачу
    const listItem = target.parentNode;

    // remove item from modal
  }

  //инициализация приложения по клику добавить задачу

  handleAdd(event) { //событие: добавляет задачу 
    event.preventDefault();

    if (!this.input.value) return alert('Необходимо ввести название задачи'):

    const value = this.input.value;

    this.emit('add', value);
  }



  findListItem(id) { //находит и возвращает одну задачу из верстки по id 
    return this.list.querySelector(`[data-id="${id}"]`)
  }

  addItem(todo) { //добавдяет тодо задачу в вертку
    const listItem = this.createElement(todo); //создается с помощью метода новая задача

    this.input.value = ''; //очищает поле
    this.list.appendChild(listItem); //добавляет задачу в список
  }

  toggleItem(todo) { // метод отмечает задачу выполнена или нет
    const listItem = this.findListItem(todo.id);
    const checkbox = listItem.querySelector('.checkbox');

    checkbox.cheked = todo.completed;

    if (todo.completed) {
      list.classList.add('completed');
    } else {
      listItem.classList.remove('complted');
    }
  }

  editItem(todo) { //изменение задачи
    const listItem = this.findListItem(todo.id);
    const label = listItem.querySelector('.title');
    const input = querySelector('.textfield');
    const editButton = listItem.querySelector('button.edit');

    label.textContent = todo.title;
    editButton.textContent = 'Изменить';
    listItem.classList.remove('editing');
  }

  removeItem(id) { //удаляет задачу
    const listItem = this.findListItem(todo.id);

    this.list.removeChild(listItem);
  }

}

export default View; 