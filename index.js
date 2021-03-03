const toDoInput = document.querySelector('#toDoInput');
const toDoForm = document.querySelector('#toDoForm');
let deleteButton;
let completeButton;
const toDoList = document.querySelector('#toDoList');

toDoForm.addEventListener('submit',(event) => {
    event.preventDefault();
    // console.log(toDoInput.value);
    Builder().
    then(result => console.log(result)).
    catch(error => console.log(error));
});

async function Builder () {
    const list = await document.createElement("li");
    const task = await document.createElement('p');
    const deleteButton =await document.createElement("button");
    const completeButton =await document.createElement("button");

    const complete = await completeButton.addEventListener('click',(event) => {
        task.classList.toggle("completedTask");
        
    });
    const deleteTask = await deleteButton.addEventListener('click',(event) => {
        toDoList.removeChild(list);
    });

    task.setAttribute('id','task');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.innerHTML = 'X';
    completeButton.setAttribute('id','completeButton');
    completeButton.innerHTML = 'Done';
    task.textContent = toDoInput.value;

    toDoList.appendChild(list);
    list.appendChild(task);
    list.appendChild(deleteButton);
    list.appendChild(completeButton);
    toDoInput.value = '';


    // return deleteTask,complete;
    
}





