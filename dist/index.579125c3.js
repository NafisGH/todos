// const app = new Controller()
const TODOS_STORAGE_KEY = "todos";
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn-add-task");
const btnClear = document.querySelector(".js-btn-clear");
const initialTodos = [];
const model = createTodosModel(initialTodos);
const view = createView(".js-input");
const storage = createStorege(TODOS_STORAGE_KEY);
const storageTodos = storage.pull();
if (storageTodos) model.update(storageTodos);
view.render(model.get());
btnNode.addEventListener("click", function() {
    console.log("btnNode");
    const todo = inputNode.value;
    model.add(todo);
    view.render(model.get());
    storage.push(model.get());
});
btnClear.addEventListener("click", function() {
    console.log("clear");
    model.clear();
    view.render(model.get());
    storage.push(model.get());
});

//# sourceMappingURL=index.579125c3.js.map
