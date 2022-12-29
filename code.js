function add_task(){
    //input Wert holen nach Eingabe
    let input_value = document.getElementById("to_do").value;
    //neue Leiste erstellen + designen
    const newDiv = document.createElement("div");
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.backgroundColor = "#111827";
    newDiv.style.padding = "1rem";
    newDiv.style.borderRadius = "1rem";
    newDiv.style.marginBottom = "1rem";
    //einfügen 
    const currentDiv = document.getElementById("new_task");
    currentDiv.after(newDiv);

    //Input text in neuem div darstellen und einfügen
    let input_text = document.createElement("div");
    let input_textnode = document.createTextNode(input_value);
    input_text.appendChild(input_textnode);
    newDiv.appendChild(input_text);

    //Löschen Button erstelle mit Funktion
    const child_div_delete = document.createElement("button");
    child_div_delete.style.borderRadius = "1rem";
    const delete_el = document.createTextNode("Löschen");
    child_div_delete.appendChild(delete_el);
    newDiv.appendChild(child_div_delete);
    child_div_delete.onclick = function(){
        document.getElementById("new_to_do").removeChild(newDiv);
    }

    //bearbeiten button mit Funktion
    const child_div_bearbeiten = document.createElement("button");
    child_div_bearbeiten.setAttribute("id", "button_edit");
    child_div_bearbeiten.style.borderRadius = "1rem"
    child_div_bearbeiten.style.float = "right";
    child_div_bearbeiten.style.marginRight = "0";
    //funktion um speichern button zu erstellen
    child_div_bearbeiten.onclick = function (){
        make_input(input_text);
        let child_div_speichern = document.createElement("button");
        child_div_speichern.style.borderRadius = "1rem"
        child_div_speichern.style.float = "right";
        child_div_speichern.style.marginRight = "0";
        const speichern = document.createTextNode("Speichern");
        child_div_speichern.appendChild(speichern);
        //speichern button hinzufügen und bearbeiten button löschen
        newDiv.appendChild(child_div_speichern);
        newDiv.removeChild(child_div_bearbeiten);

        //speichern funktion, um ergebnis zu übernehmen
        child_div_speichern.onclick = function(){
            make_div(input_text, input_text.firstChild.value);
            console.log(typeof(input_text))
            newDiv.appendChild(child_div_bearbeiten);
            newDiv.removeChild(child_div_speichern);
        }



    }
    const bearbeiten = document.createTextNode("Bearbeiten");
    child_div_bearbeiten.appendChild(bearbeiten);
    newDiv.appendChild(child_div_bearbeiten);


}

//erstellte Leiste löschen
function del_element(elternteil, kind){
    elternteil.removeChild(kind)
    console.log("hello")
}

//div to input Funktion
function make_input(e){
    e.innerHTML = '<input value="' + e.innerText + '">';
}
// input to div Funktion
function make_div(e, val){
    e.innerHTML = '<div>' + val +  '</div>';
}