window.addEventListener('load', () => {
    const form = document.querySelector ("#new-task-form");
    const firstName = document.querySelector ("#first-name");
    const lastName = document.querySelector ("#last-name");
    const list_el = document.querySelector("#tasks");

    
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task1 = firstName.value;
        const task2 = lastName.value

        if(!(task1 && task2)){
            alert("fill the task");
            return;
        }


        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el1 = document.createElement("div");
        task_content_el1.classList.add("content1");

        const task_content_el2 = document.createElement("div");
        task_content_el2.classList.add("content2");

        const task_input_el1 = document.createElement("input");
        task_input_el1.classList.add('text1');
        task_input_el1.type = "text";
        task_input_el1.setAttribute("readonly", "readonly")
        task_input_el1.value = task1;


        const task_input_el2 = document.createElement("input");
        task_input_el2.classList.add('text');
        task_input_el2.type = "text";
        task_input_el2.setAttribute("readonly", "readonly")
        task_input_el2.value = task2;


        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        
        const task_edit_el= document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";
        firstName.value="";
        lastName.value= "";


        task_el.appendChild(task_content_el1);
        task_el.appendChild(task_content_el2);
        list_el.append(task_el);
        task_content_el1.appendChild(task_input_el1); 
        task_content_el2.appendChild(task_input_el2); 

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);



                //edit button functionality
                task_edit_el.addEventListener('click', () => {
                    if (task_edit_el.innerText.toLowerCase() =="edit") {
                         task_input_el1.removeAttribute("readonly");
                         task_input_el2.removeAttribute("readonly");
                         task_input_el1.focus();
                         task_input_el2.focus();
                         task_edit_el.innerText = "Save";
                    } else {
                        task_input_el1.setAttribute("readonly","readonly");
                        task_input_el2.setAttribute("readonly","readonly");
                        task_edit_el.innerText = "Edit";
                    }
                    });


                //delete button functionality
                 task_delete_el.addEventListener('click', ()=>{
                 list_el.removeChild(task_el);

                 });
    });
});