function createGrid(numberOfSquares){
    let totalSquare = numberOfSquares * numberOfSquares;
    let grid = document.querySelector(".grid");
    for(let i = 0; i < 16*16; i++)
    {
        if(i%16 == 0){
            const column = document.createElement("div");
            column.className = 'column';
            grid.append(column);
            for(let j = 0; j < 16; j++){
                const square = document.createElement("div");
                square.className = 'square';
                column.append(square);
            }
        }
        
    }
    hoverSquares();
    
}

function removeGrid(){
    let grid = document.querySelector(".grid");
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}


createGrid(16);


let button = document.querySelector(".button");

button.addEventListener("click", () =>{
    // let answer = prompt("How many squares would you like?");
    // newGrid(answer);
    // hoverSquares();
    removeGrid();

})

function newGrid(numberOfSquares){
    if(numberOfSquares > 100){
        alert("Must be less than 101");
        return;
    }
    createGrid(numberOfSquares);
}



function hoverSquares(){
    let sqr = document.querySelectorAll(".square");

    sqr.forEach(sqr =>{
        sqr.addEventListener("mouseover", () =>{
            sqr.style.cssText = "color: blue; background: blue";
        })
    });

}
