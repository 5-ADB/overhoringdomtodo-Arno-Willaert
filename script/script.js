// een todolijst met vak? 
const lijstToDo = [
  {vak: "Frans", id: 1, af: "False"},
  {vak: "wiskunde", id: 2, af: "True"},
  {vak: "Nederlands", id: 3, af: "True"}
]

const winkels = [
  {winkel: "Geen Winkel", id: 1},
  {winkel: "Lidl", id: 2},
  {winkel: "Delhaize", id: 3},
  {winkel: "Aldi", id: 4},
  {winkel: "Colruyt", id: 5}
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



// wat is richting?? 
lijstToDo.forEach((richting) =>{
  // je maakt een lijst item - geen nieuwe lijst
  const nieuweLijst = document.createElement('li')
  nieuweLijst.id = richting.id
  nieuweLijst.innerHTML = richting.vak

  // je zet hier enkele stappen teveel
  nieuweLijst.addEventListener("click", function () {
    nieuweLijst.classList.toggle("completed")
  })
  if(richting.af == "True"){
    nieuweLijst.classList.toggle("completed")
  }
  list.appendChild(nieuweLijst)
})

const selectbox = document.createElement("select")
form.appendChild(selectbox)


 winkels.forEach((brand) =>{
   const optie = document.createElement("option")
   optie.id = brand.id
   optie.innerHTML = brand.winkel
   selectbox.appendChild(optie)
   console.log(optie);
 })

