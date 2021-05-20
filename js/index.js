function clickedYes(x){
    if (x.checked){
        document.getElementById("App").style.visibility = "visible";
    }
}

function clickedNo(x){
    if (x.checked){
        document.getElementById("App").style.visibility = "hidden";
    }
}