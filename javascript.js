function createGrid(){
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
        
        
        // const column = document.createElement("div");
        // column.className = 'column';
        // if(i % 16 == 0){
        //     const column = document.createElement("div");
        //     column.className = 'column';
        //     grid.append(column);
        // }
        // const square = document.createElement("div")
        // square.className = 'square'; 
        // grid.append(square);
    }
    
}


createGrid();
//figure out a way to use the mousemove event handler
//make it so it changes color every time a square is touched
//would it be better to do the event handler on the column divs or the individual square?
// let sqr = document.querySelectorAll("square");
let sqr = document.querySelectorAll(".square");
let clm = document.querySelector("column");
let grid = document.querySelector("grid");


sqr.forEach(sqr =>{
    sqr.addEventListener("mousemove", () =>{
        sqr.style.cssText = "color: blue; background: blue";
    })
});

// for(let i = 0; i < sqr.length; i++){
//     sqr[i].addEventListener('click', () =>{
//         sqr[i].style.cssText = "color: blue; background: white";
//         console.log("jhe");
//     });
// }