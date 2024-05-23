const colors = ['#ff0000', '#00ff00', '#0000ff'];

function createGrid(numberOfSquares){
    let totalSquare = numberOfSquares * numberOfSquares;
    let grid = document.querySelector(".grid");
    for(let i = 0; i < totalSquare; i++)
    {
        if(i%numberOfSquares == 0){
            const column = document.createElement("div");
            column.className = 'column';
            grid.append(column);
            for(let j = 0; j < numberOfSquares; j++){
                const square = document.createElement("div");
                square.className = 'square';
                column.append(square);
            }
        }
        
    }
    colorSquares();
    
}

function removeGrid(){
    document.querySelectorAll(".square").forEach(e => e.remove());
    document.querySelectorAll(".column").forEach(e => e.remove());
    return;
}


createGrid(16);


let PickSquaresbutton = document.querySelector(".pickSquares");

PickSquaresbutton.addEventListener("click", () =>{
    removeGrid();
    let answer = prompt("How many squares would you like?");
    
    newGrid(answer);
    colorSquares();

})

function newGrid(numberOfSquares){
    if(numberOfSquares > 100){
        alert("Must be less than 101");
        return;
    }
    createGrid(numberOfSquares);
}



function colorSquares(){
    let sqr = document.querySelectorAll(".square");
    
    sqr.forEach(sqr =>{
        sqr.addEventListener("mouseover", () =>{
            sqr.style.cssText=`background: ${getRandomColor()}`;
        })
    });

}

function hoverSquares(){
    let sqr = document.querySelectorAll(".square"); 

    sqr.forEach(sqr =>{
        sqr.addEventListener("mouseover", () =>{
            sqr.style.cssText = "background: grey";
        })
    });
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}
