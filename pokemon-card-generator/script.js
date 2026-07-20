const form= document.querySelector("#pokemonForm");
const countInput = document.querySelector("#count");
const typeSelect = document.querySelector("#type");
const cardsContainer = document.querySelector("#cards");

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    console.log("count:",countInput.value);
    console.log("type:",typeSelect.value);
    const count = Number(countInput.value);
    const selectedType = typeSelect.value;
        cardsContainer.innerHTML = `
        <div class="loading">
            Loading Pokémon...
        </div>
    `;
    let found =0;
    let id=1;
    try{
   cardsContainer.innerHTML = "";
    while(found<count){
    const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    const pokemonType = data.types.map(
    t => t.type.name);
   
    if(pokemonType.includes(selectedType) ){
        found++;
        const pokemonName =
    data.name.charAt(0).toUpperCase() +
    data.name.slice(1);
    const image =
    data.sprites.other["official-artwork"].front_default ||
    data.sprites.front_default;
    cardsContainer.innerHTML +=`
        <div class="card">
        <h2>${pokemonName}</h2>
        <span class="badge">${pokemonType.join(" • ")}</span>
        <img src="${image}">
    </div>`;}
    id++;
    }}
    catch (error) {
        console.error(error);

        cardsContainer.innerHTML = `
            <h2>
                Something went wrong.
                Please try again.
            </h2>
        `;
    }

});