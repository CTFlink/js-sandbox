const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

//her laver jeg html'en der hører til en todo (gøremål)
const generateTemplate = (todo) => {
  //dette er html'en
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  //her tilføjes html'en til todo UL'en fra index.html
  list.innerHTML += html;
};

//tilføj ny todo function
addForm.addEventListener("submit", (e) => {
  //her undgår jeg at submit knappen relaoder siden
  e.preventDefault();
  //her fanger vi værdien fra formen...
  //trim() til sidst fjerner alle mellemrum før og efter
  const todo = addForm.add.value.trim();

  //her tjekker jeg først om brugeren rent faktisk har indtastet noget
  if (todo.length) generateTemplate(todo);
  addForm.reset();
});

//slet todos
list.addEventListener("click", (e) => {
  //her checker jeg om den class der rent faktisk er klikket på, indeholder delete classen
  if (e.target.classList.contains("delete"))
    // i så fald, går jeg et niveau op til parent (Li tagget) og sletter den
    e.target.parentElement.remove();
});
