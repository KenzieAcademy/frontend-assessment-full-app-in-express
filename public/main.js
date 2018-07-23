const backColDivWrap = document.getElementById("bck-col-div");

function populateColDiv() {

    for ( let colDiv = 0; colDiv < 6; colDiv++ ) {
        const newColDiv = document.createElement("div");

        newColDiv.id = `c${colDiv}`;
        newColDiv.classList.add("col-div-style");
        backColDivWrap.appendChild(newColDiv);
    }
}

populateColDiv();