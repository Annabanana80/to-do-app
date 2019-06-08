function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        
        //create list item
        let newLi = document.createElement('li');  
        newLi.classList.add('mdl-list__item', 'newMdl');

        //create primary span container
        let toDoContainer = document.createElement('span');
        toDoContainer.classList.add('mdl-list__item-primary-content', 'newMdl');

        //create checkbox and attach to primary span container
        let toDoLabel = document.createElement('label');
        toDoLabel.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect', 'newMdl');
        toDoLabel.htmlFor = 'list-checkbox-1';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'list-checkbox-1';
        checkbox.classList.add('mdl-checkbox__input', 'newMdl');


        //create text and attach to primary span container
        let labelText = document.createTextNode(newToDoText.value);
        

        //append primary span container container to list item
        

        //create secondary span container
        let deleteContainer = document.createElement('span');
        deleteContainer.classList.add('mdl-list__item-secondary-action', 'newMdl');

        //create delete button and append to secondary span container
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--icon', 'newMdl');
        let icon = document.createElement('i');
        let text = document.createTextNode('delete');
        icon.classList.add('material-icons');
        icon.appendChild(text);
        deleteButton.appendChild(icon);
        
        deleteContainer.addEventListener('click', function(e) {
            toDoList.removeChild(deleteButton.parentNode.parentNode);
        });
        
        deleteContainer.appendChild(deleteButton);
        toDoLabel.appendChild(checkbox);
        newLi.appendChild(toDoContainer);
        toDoContainer.appendChild(toDoLabel);
        toDoContainer.appendChild(labelText);
        //append secondary span container to list item
        newLi.appendChild(deleteContainer);

        //add list item to to-do list
        toDoList.appendChild(newLi);

        //empty form input
        newToDoText.value = '';
        let mdlElemets = document.querySelectorAll(".newMdl");
        componentHandler.upgradeElements(mdlElemets);
    });
}

window.onload = function() {
   onReady();
}