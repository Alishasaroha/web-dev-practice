const buttons = document.querySelectorAll(".color-btn");
for(const button of buttons){
    const color = button.textContent;
    button.style.backgroundColor = color;
    button.addEventListener("click",()=>{
        const color = button.textContent;
        document.body.style.backgroundColor = color;
    })
}
const input = document.querySelector("#colorInput");
const customButton = document.querySelector("#addColorBtn");

customButton.addEventListener("click",()=>{
    const color = input.value;
    if(color.trim() === ""){
    return;
}
    const newBtn = document.createElement("button");
    newBtn.textContent = color.toUpperCase();
    document.querySelector(".button-container").appendChild(newBtn);
    newBtn.classList.add("color-btn");
    input.value ="";
    newBtn.style.backgroundColor = color;
    newBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = color;
})
})
