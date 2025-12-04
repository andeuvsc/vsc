// Wähle die DOM-Elemente
const addInput = document.getElementById("addItemInput");
const addButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

// Aktuelles Datum im Footer
let date = new Date();
let current_date = "Erstellt am "+date.getDate() +"."+(date.getMonth()+1)+"."+date.getFullYear();
document.getElementById("datum").innerHTML=current_date;

// Funktion zum Hinzufügen eines Artikels zur Liste
function addItem(){
    // Erstelle ein neues Listenelement (li)
    const li = document.createElement("li");

    // Füge den Text des Input-Felds als Inhalt des Listenelements hinzu
    li.innerText = addInput.value;

    // Füge einen Button zum Löschen des Listenelements hinzu
    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteItemButton";
    deleteButton.addEventListener("click", () => {
        li.remove();
    })

    // Delete-Item
    const deleteButtonIcon = document.createElement("i");
    deleteButtonIcon.className = "material-symbols-outlined";
    deleteButtonIcon.textContent = "delete";

    // Icon hinzufügen
    deleteButton.appendChild(deleteButtonIcon)

    // Löschen-Button hinzufügen
    li.appendChild(deleteButton);

    // Füge das Listenelement zur Liste hinzu
    itemList.appendChild(li);

    // Setze das Eingabefeld zurück
    addInput.value = "";
}

// Füge einen Event-Listener zum Hinzufügen von Artikeln hinzu
addButton.addEventListener("click", () => {
    addItem()
});

// Füge einen Event-Handler zum Hinzufügen von Artokeln hinzu,
// wenn die Enter-Taste gedrückt wird

addInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        addItem();
    }
})