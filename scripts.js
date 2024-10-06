const GRID_NUM = 16*16;
const container = document.querySelector(".container");

// Initialize grid divs.
for(let i = 0; i<GRID_NUM; i++){
    let divGrid = document.createElement("div");
    container.appendChild(divGrid);
}

// Applies a pink hover effect to all grid items.
const gridItems = document.querySelectorAll(".container div");

gridItems.forEach((gridItem) =>{
    gridItem.addEventListener("mouseenter", (e) => {
        e.target.style.background = "pink";
    });
});

// Prompt for user to set new size
const btn = document.querySelector(".header button");

btn.addEventListener("click", () => {
    let size = prompt("Number of squares per side?");
    console.log(size);
})
