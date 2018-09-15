class Modal {
  constructor(state = []) { //принимает массив
    this.state = state;  //состоянием будет массив данных
  }

  getItem(id) { //получение одного todo из состояния
    return this.state.find(item => item.id == id); //метод возвращает один объект из массива данных  
  }

  addItem(item) { //изменение состояния путем добавления todoшки
    this.state.push(item);

    return item;
  }

  updateItem(id, data) {  // метод обновления состояния
    const item = this.getItem(id); //в переменной объект из состояния 

    Object.keys(data).forEach(prop => item[prop] = data[prop]);
  }

  removeItem(id) {
    const index = this.state.findIndex(item => item.id == id);

    if (index > -1) {
      this.state.splice(index, 1);
    }
  }
}

export default Model; 