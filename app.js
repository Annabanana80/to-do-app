function onReady() {

  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
  }

  function deleteToDo(id) {
    return toDos.filter(toDo => toDo.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      newLi.classList.add('mdl-list__item', 'newMdl');

      let toDoContainer = document.createElement('span');
      toDoContainer.classList.add('mdl-list__item-primary-content', 'newMdl');

      let toDoLabel = document.createElement('label');
      toDoLabel.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect', 'newMdl');
      toDoLabel.htmlFor = 'list-checkbox-1';
      
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.id = 'list-checkbox-1';
      checkbox.classList.add('mdl-checkbox__input', 'newMdl');

      //newLi.innerHTML = toDo.title;
      let labelText = document.createTextNode(toDo.title);


      let deleteContainer = document.createElement('span');
      deleteContainer.classList.add('mdl-list__item-secondary-action', 'newMdl');
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--icon', 'newMdl');
      let icon = document.createElement('i');
      let text = document.createTextNode('delete');
      icon.classList.add('material-icons');
      icon.appendChild(text);
      deleteBtn.appendChild(icon);

      deleteContainer.appendChild(deleteBtn);
      toDoLabel.appendChild(checkbox);
      newLi.appendChild(toDoContainer);
      toDoContainer.appendChild(toDoLabel);
      toDoContainer.appendChild(labelText);
      toDoList.appendChild(newLi);
      newLi.appendChild(deleteContainer);


      deleteBtn.addEventListener('click', () => {
        toDos = deleteToDo(toDo.id);
        renderTheUI();
      });
       let mdlElemets = document.querySelectorAll(".newMdl");
        componentHandler.upgradeElements(mdlElemets);
    });
  }

  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
    renderTheUI();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
}
