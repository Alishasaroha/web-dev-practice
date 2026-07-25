const fieldType = document.querySelector("#fieldType");
const fieldLabel = document.querySelector("#fieldLabel");

const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () =>{
    if(fieldLabel.value === ""){
    return;
}
const preview = document.querySelector("#preview");
const fieldContainer = document.createElement("div");
const label = document.createElement("label");
const inputEl = document.createElement("input");
label.textContent = fieldLabel.value;
inputEl.type = fieldType.value;
fieldContainer.classList.add("field");
fieldContainer.appendChild(label);
fieldContainer.appendChild(inputEl);
preview.appendChild(fieldContainer);
fieldLabel.value="";
})

