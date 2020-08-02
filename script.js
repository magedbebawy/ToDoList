const list = [];
const items = document.getElementById("lists");
const add = document.querySelector('button');
const newItem = document.querySelector('input');
const icon = document.getElementsByTagName('i');
const allItems = document.getElementsByClassName("todo");

add.addEventListener("click", function(){
    if(newItem.value === ""){
        return;
    }
    list.push(newItem.value);
    renderList();
    newItem.value = null;
    list.length=0;
    removeItem();
    completed();
});

function renderList(){
    completed();
    list.forEach(element => {
        const todo = document.createElement('div');
        todo.classList.add("todo");
        const check = document.createElement('p');
        const item = document.createElement('p');
        const remove = document.createElement('i');
        remove.classList.add("fa");
        remove.classList.add("fa-trash");
        check.classList.add("checkStyle");
        item.innerHTML = element;
        todo.appendChild(check);
        todo.appendChild(item);
        todo.appendChild(remove);
        items.appendChild(todo);
        
    });
}

function removeItem(){
    for(var i=0; i < icon.length; i++){
        icon[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}
  

function completed(){
    for(var i=0; i < allItems.length; i++){
        allItems[i].onclick = function(){
            this.classList.toggle("completed");
        }
    }
}



