function createGrid(){
    let grid = document.querySelector(".grid");
    for(let i = 0; i < 16; i++)
    {
        const newDiv = document.createElement("div");
       // newDiv.setAttribute("style", "color: blue; background: black;");
        grid.append(newDiv);
    }
    
}
