// class View {
//   constructor({ onNewTask }) {
//     this.onNewTask = onNewTask;
//     this.inputNode = document.querySelector(".js-input");
//     this.btntnAddTask = document.querySelector(".js-btn-add-task");
//     this.output = document.querySelector(".js-output");
//     this.btnClear = document.querySelector(".js-btn-clear");
// import { doc } from "firebase/firestore";
//     this.btntnAddTask.addEventListener("click", this.handleBtnClickAddTask);
//     this.btnClear.addEventListener("click", this.handleBtnClear);
//   }
//   handleBtnClickAddTask = () => {
//     const task = this.inputNode.value;
//     this.onNewTask(task);
//     this.inputNode.value = "";
//   };
//   handleBtnClear = () => {
//     this.output.innerText = "";
//   };
//   render(tasks) {
//     this.output.innerText = "";
//     tasks.forEach((task) => {
//       console.log(tasks);
//       const ul = document.createElement("ul");
//       const li = document.createElement("li");
//       li.textContent = task;
//       ul.append(li);
//       this.output.append(ul);
//     });
//   }
// }
function createView(selector) {
    const node = document.querySelector(selector);
    return {
        node,
        render: function(todos) {
            let outputListHTML = "";
            todos.forEach((todo)=>{
                outputListHTML += `<li>${todo}</li>`;
            });
            this.node.innerText = `<ul>${outputListHTML}</ul>`;
        }
    };
}

//# sourceMappingURL=index.a8b7953b.js.map
