const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

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

//delete todos
list.addEventListener("click", (e) => {
  //her checker jeg om den class der rent faktisk er klikket på, indeholder delete classen
  if (e.target.classList.contains("delete"))
    // i så fald, går jeg et niveau op til parent (Li tagget) og sletter den
    e.target.parentElement.remove();
});

//function til at lave søgningen
const filterTodos = (term) => {
  //Jeg laver en array af list.children dvs. <span> taggene i listerne og filtrerer dem
  Array.from(list.children)
    .filter(
      (todo) =>
        //Hvis den indtastede term inkluderer textindholdet i span tagget skal det ikke sorteres fra
        !todo.textContent.toLowerCase().includes(term)
    )
    //derefter løber jeg igennem de list tags som er blevet filtreret og giver dem classen "filtered"
    .forEach((todo) => todo.classList.add("filtered"));
  //Ved at give de <span> der ikke matcher "term" en class der hedder "filtered har jeg sorteret efter søgningen

  //Her gør jeg det modsatte end ovenover, dvs. fjerner class "filtered" når det rent faktisk matcher
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event... dvs. når brugeren taster et bogstav i søgefeltet køres denne function
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  //hver gang en tast bliver tastet kaldes denne method
  filterTodos(term);
});
