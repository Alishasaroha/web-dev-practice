let tasks = [];
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todo-list");
const progressList = document.querySelector("#progress-list");
const doneList = document.querySelector("#done-list");

addBtn.addEventListener("click",()=>{
    const task = taskInput.value;
    if(task === ""){
        return;
    }
    const newTask ={
        id : Date.now(),
        title: task,
        status:"todo"
    }
    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
})

function renderTasks(){
    todoList.innerHTML = "";
    progressList.innerHTML ="";
    doneList.innerHTML="";
    for(const task of tasks){
        const card = document.createElement("div");
        card.classList.add("task-card");
        const moveBtn = document.createElement("button");
        const delBtn = document.createElement("button");  
        moveBtn.classList.add("move-btn");
        delBtn.classList.add("delete-btn");
        const title = document.createElement("p");
        title.innerText = task.title;
        delBtn.textContent ="Delete";
        card.appendChild(title);
        moveBtn.textContent = "Move";
        card.appendChild(moveBtn);
        card.appendChild(delBtn);

        delBtn.addEventListener("click",()=>{
           tasks = tasks.filter((item)=>{
           return task.id !=item.id; 
            });
            renderTasks();
        })
        moveBtn.addEventListener("click", ()=>{
            if(task.status === "todo"){
                task.status = "progress";
            }
            else if(task.status ==="progress"){
                task.status = "done";
            }
            else {
                 
            }
            renderTasks();
        });
        if(task.status == "todo"){
            todoList.appendChild(card);
        }
        else if(task.status == "progress"){
            progressList.appendChild(card);
        }
        else{
            doneList.appendChild(card);
        }
    }
}