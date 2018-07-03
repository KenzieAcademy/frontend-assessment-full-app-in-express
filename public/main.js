const backColDivWrap = document.getElementById("bck-col-div");

function populateColDiv() {

    for ( let colDiv = 0; colDiv < 5; colDiv++ ) {
        const newColDiv = document.createElement("div");
        
        newColDiv.classList.add("col-div-style");
        backColDivWrap.appendChild(backColDivWrap);
    }
}