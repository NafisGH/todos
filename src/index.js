import { createTodosModel } from "./model";
import { createView } from "./view";
import { createStorage, TODOS_STORAGE_KEY } from "./storage";

const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn-add-task");
const btnClear = document.querySelector(".js-btn-clear");

const initialTodos = [];
const model = createTodosModel(initialTodos);
const view = createView(".js-output", handleClickTodo);
const storage = createStorage(TODOS_STORAGE_KEY);

storage.pull().then((todos) => {
  model.update(todos);
  view.render(model.get());
});

btnNode.addEventListener("click", function () {
  const todo = model.create({
    title: inputNode.value,
  });
  view.addTodo(todo);
  storage.push(todo);
  inputNode.value = "";
});

btnClear.addEventListener("click", function () {
  storage.delete(model.get()); // Получаю из модели все тудушки и ставлю их на удаление

  model.clear(); // Очистка данных в Model

  view.render(model.get()); // Происходит рирендер, актуализируем текущие данные из модели
  view.node.innerHTML = "";
});

function handleClickTodo(id) {
  model.toggleTodo(id);
  storage.update(model.getTodo(id)) //  передаем выбранную тудушку
}
