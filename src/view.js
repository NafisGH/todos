export function createView(selector, onClickTodo) {
  const node = document.querySelector(selector);

  return {
    node,
    render: function (todos) {
      todos.forEach((todo) => {
        this.addTodo(todo);
      });
    },

    addTodo: function (todo) {
      const div = document.createElement("div");
      const input = document.createElement("input");
      const lable = document.createElement("lable");

      input.setAttribute("type", "checkbox");
      input.setAttribute("id", todo.id);

      // Это изначальный способ
      // input.onclick = () => {
      //     onClickTodo(todo.id)
      // }

      input.addEventListener("click", (event) => {
        const clickedInput = event.target; // target содержит ссылку на элемент, по которому кликнули
        const id = clickedInput.id; // id элемента, по которому кликнули
        onClickTodo(id); // Получаю id тодошки по которой кликнул
      });


      if (todo.done) {
        input.setAttribute("checked", true);
      }

      lable.innerText = todo.title;
      lable.setAttribute("for", todo.id);

      div.append(input, lable);
      this.node.append(div);
    },
  };
}
