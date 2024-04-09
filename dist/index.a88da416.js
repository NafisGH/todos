// class Model {
//     constructor({
//         onTaskChange
//     }) {
//         this.tasks = []
//         this.onTaskChange = onTaskChange
//     }
//     addTask(task) {
//         this.tasks.push(task)
//         this.onTaskChange(this.tasks)
//     }
//     setTask(tasks) {
//         this.tasks = tasks
//         this.onTaskChange(this.tasks)
//     }
//     getTasks() {
//         return this.tasks
//     }
// }
function createTodosModel(todos) {
    return {
        todos,
        update: function(todos) {
            this.todos = todos;
        },
        add: function(todo) {
            this.todos.push(todo);
        },
        get: function() {
            return this.todos;
        },
        clear: function() {
            this.todos = [];
        }
    };
}

//# sourceMappingURL=index.a88da416.js.map
