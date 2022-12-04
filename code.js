function add_task(){
    let input_value = document.getElementById("to_do").value;
    const newDiv = document.createElement("div");
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.backgroundColor = "#111827";
    newDiv.style.padding = "1rem";
    newDiv.style.borderRadius = "1rem";
    newDiv.style.marginBottom = "1rem";

    const newContent = document.createTextNode(input_value);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("new_task");
    currentDiv.after(newDiv);


    const child_div_bearbeiten = document.createElement("button");
    child_div_bearbeiten.setAttribute("id", "button_edit");
    child_div_bearbeiten.style.borderRadius = "1rem"
    child_div_bearbeiten.style.float = "right";
    child_div_bearbeiten.style.marginRight = "0";
    child_div_bearbeiten.onclick = function (){
        alert("Bearbeiten");
    }
    const bearbeiten = document.createTextNode("Bearbeiten");
    child_div_bearbeiten.appendChild(bearbeiten);
    newDiv.appendChild(child_div_bearbeiten)

    const child_div_delete = document.createElement("button");
    child_div_delete.style.borderRadius = "1rem";
    const delete_el = document.createTextNode("Löschen");
    child_div_delete.appendChild(delete_el);
    newDiv.appendChild(child_div_delete);
    child_div_delete.onclick = function(){
        document.getElementById("new_to_do").removeChild(newDiv)
    }


    /*
    let child_div_bearbeiten = document.createElement("div");
    child_div_bearbeiten.appendChild(bearbeiten);
    const bearbeiten = document.createTextNode("Bearbeiten");
    bearbeiten.style.backgroundImage = "linear-gradient(to right, #EC4899, #8B5CF6)";
    newDiv.after(child_div_bearbeiten);*/


}

function del_element(elternteil, kind){
    elternteil.removeChild(kind)
    console.log("hello")
}