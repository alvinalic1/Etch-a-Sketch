
/*
Created the grid based on number of squares that are inputed
*/
function createGrid(numberOfSquares) {
    let totalSquare = numberOfSquares * numberOfSquares;
    let grid = document.querySelector(".grid");
    for (let i = 0; i < totalSquare; i++) {
        if (i % numberOfSquares == 0) {
            const column = document.createElement("div");
            column.className = 'column';
            grid.append(column);
            for (let j = 0; j < numberOfSquares; j++) {
                const square = document.createElement("div");
                square.className = 'square';
                column.append(square);
            }
        }

    }
    hoverSquares();

}

function removeGrid() {
    document.querySelectorAll(".square").forEach(e => e.remove());
    document.querySelectorAll(".column").forEach(e => e.remove());
    return;
}

function removeStyling() {
    document.querySelectorAll(".square").forEach(e => e.setAttribute("style", "background: rgb(197, 189, 189)"));
    return;
}


createGrid(16);
eventListeners();


// let PickSquaresbutton = document.querySelector(".pickSquares");

// PickSquaresbutton.addEventListener("click", () => {
//     removeGrid();
//     let answer = prompt("How many squares would you like?");

//     newGrid(answer);
//     hoverSquares();

// })

/*
Creates a new grid based on the given parameter
If # of squares is greater than 100 it ends
*/
function newGrid(numberOfSquares) {
    if (numberOfSquares > 100) {
        alert("Must be less than 101");
        return;
    }
    createGrid(numberOfSquares);
}


/*
Function that uses the getRandomColor function
And adds it to the event listener so each square is different color
*/
function colorSquares() {
    let sqr = document.querySelectorAll(".square");

    sqr.forEach(sqr => {
        sqr.addEventListener("mouseover", () => {
            sqr.style.cssText = `background: ${getRandomColor()}`;
        })
    });

}

/*
function that puts a hover effect over each of the squares
*/
function hoverSquares() {
    let sqr = document.querySelectorAll(".square");

    sqr.forEach(sqr => {
        sqr.addEventListener("mouseover", () => {
            sqr.style.cssText = "background: grey";
        })
    });
}

/*
Function that returns a random color
*/
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// let hover = document.querySelector(".hover");

// hover.addEventListener("click", () => {
//     removeStyling();
//     hoverSquares()
// });

// let randomColors = document.querySelector(".randomColors");

// randomColors.addEventListener("click", () => {
//     removeStyling();
//     colorSquares();
// })


function eventListeners() {
    let hover = document.querySelector(".hover");
    let randomColors = document.querySelector(".randomColors");
    let pickSquaresButton = document.querySelector(".pickSquares");


    hover.addEventListener("click", () => {
        removeStyling();
        hoverSquares()
    });


    randomColors.addEventListener("click", () => {
        removeStyling();
        colorSquares();
    })

    pickSquaresButton.addEventListener("click", () => {
        removeGrid();
        let answer = prompt("How many squares would you like?");

        newGrid(answer);
        hoverSquares();

    })

}