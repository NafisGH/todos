import { v4 as uuidv4 } from "uuid";

export function createTodosModel(todos) {
  return {
    todos,
    update: function (todos) {
      this.todos = todos;
    },
    create: function ({ title }) {
      const todo = {
        title,
        done: false,
        id: uuidv4(),
      };
      this.todos.push(todo);
      return todo;
    },
    get: function () {
      return this.todos;
    },
    clear: function () {
      this.todos = [];
    },
    toggleTodo: function (id) {
      this.get().forEach((todo) => {
        if (id === todo.id) {
          todo.done = !todo.done;
        }
      });
    },
    getTodo: function (id) {
      let result = null;
      this.get().forEach((todo) => {
        if (id === todo.id) {
          result = todo;
        }
      });
      return result
    },
  };
}
