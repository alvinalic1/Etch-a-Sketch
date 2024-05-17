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