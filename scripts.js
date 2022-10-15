//Creates grid divs
//Input: the size of the grid
function createGrid(n) {
    
    for(let i = 0; i < n; i++)
    {
        let col = document.createElement("div");
        col.className = "col";

        for(let j = 0; j < n; j++)
        {
            let row = document.createElement("div");
            row.className = "row";

            row.style.width = Math.round(0.5 * container.offsetWidth / n) + "px";
            row.style.height = Math.round(0.5 * container.offsetWidth / n) + "px";

            col.appendChild(row);
        }
        container.appendChild(col);
    }
}

//Initializes the grid and adds hover event listeners
//Inputs: the size of the grid and the color of the grid when hovered over
function initSketch(size, color) {
    createGrid(size);

    const grid_items = document.getElementsByClassName("row");
    console.log(grid_items);

    for(let i = 0; i < grid_items.length; i++)
    {
        grid_items[i].addEventListener("mouseover", function() {
            grid_items[i].style.backgroundColor = color;
        });
    }
}

//Removes the grid
function deleteSketch() {

    container.innerHTML = "";
}

let size = 16;
let color = "#000000";

const container = document.querySelector(".container");
const grid_size = document.querySelector(".grid-size");

const btns = document.querySelectorAll(".dropdown-content > *");
const r_btn = document.querySelector(".reset_btn");

btns.forEach((btn) => {
    btn.addEventListener("click", function() {
        size = parseInt(btn.className);
        grid_size.innerHTML = size + " x " + size;
        deleteSketch();
        initSketch(size, color);
    });
})

r_btn.addEventListener("click", function() {
    deleteSketch();
    initSketch(size, color);
});

initSketch(size, color);