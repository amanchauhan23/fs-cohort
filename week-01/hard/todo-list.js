/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  #dir;

  constructor() {
    this.#dir = [];
  }

  add(todo) {
    this.#dir.push(todo);
  }

  remove(index) {
    if (index > -1 && index < this.#dir.length) this.#dir.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index > -1 && index < this.#dir.length)
      this.#dir.splice(index, 1, updatedTodo);
  }

  getAll() {
    return this.#dir;
  }

  get(index) {
    if (index > -1 && index < this.#dir.length) return this.#dir[index];
    else return null;
  }

  clear() {
    this.#dir = [];
  }
}

module.exports = Todo;
