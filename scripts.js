const INIT_GRID_NUM = 16*16;
const container = document.querySelector(".container");

// Function to initialize grid divs.
function initializeGrid(numOfGrids){
    const numOfSides = Math.sqrt(numOfGrids);

    for(let i = 0; i<numOfGrids; i++){
        let divGrid = document.createElement("div");
        divGrid.style.width = `calc((100% / ${numOfSides}))`;
        divGrid.style.height = `calc((100% / ${numOfSides}))`;
        container.appendChild(divGrid);
    }

    const gridItems = document.querySelectorAll(".container div");

    gridItems.forEach((gridItem) =>{
        gridItem.addEventListener("mouseenter", (e) => {
            e.target.style.background = "pink";
        });
    });
}

// Function to create new grid
function createNewGrid(){ 
    let size = (Number(prompt("Enter a size between 1 and 99:")));
    
    // Invalid input checking
    if(!Number.isInteger(size) || size <= 0 || size >= 100){
        alert("Invalid Number! Try again");
        return;
    }else{
        // Reset grid
        container.replaceChildren();
        // Apply back css
        initializeGrid(size ** 2);
    }
}


//Initialize grid/sktchpad.
initializeGrid(INIT_GRID_NUM)

// Prompt for user to set new size.
const btn = document.querySelector(".header button");

btn.addEventListener("click", () => createNewGrid());
