const lijstToDo = [
  {vak: "Frans", id: 1, af: "False"},
  {vak: "wiskunde", id: 2, af: "True"},
  {vak: "Nederlands", id: 3, af: "False"}
]

const winkels = [
  {winkel: "Aldi", id: 1},
  {winkel: "Lidl", id: 2},
  {winkel: "Delhaize", id: 3}
]


const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});


lijstToDo.forEach((richting) =>{
  const nieuweLijst = document.createElement('li')
  nieuweLijst.id = richting.id
  nieuweLijst.innerHTML = richting.vak
  nieuweLijst.addEventListener("click", function () {
    nieuweLijst.classList.toggle("completed")
  })
  if(richting.af == "True"){
    nieuweLijst.classList.toggle("completed")
  }
  list.appendChild(nieuweLijst)
})


