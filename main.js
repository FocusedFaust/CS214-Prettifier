console.log("The extension is up and running");

var headings = document.querySelectorAll("h3")

for (head of headings){
    //console.log(head.lastChild.textContent)
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.id = "work_tracker"
    checkbox.style.display = 'block'
    //if (localStorage[head.lastChild.textContent] == true) {console.log("true")}
    checkbox.checked = JSON.parse(localStorage.getItem('data'))[head.lastChild.textContent]
    //checkbox.onclick = checkboxClicked(checkbox, head)
    checkbox.onclick = allCheckboxes
    //checkbox.addEventListener("click", () => checkboxClicked(checkbox, head))

    head.insertAdjacentElement('afterbegin', checkbox)  // On top of
    //head.appendChild(checkbox)                        // Below
}

function allCheckboxes() {
    var boxes = document.querySelectorAll("#work_tracker")
    console.log("allCheckboxes")
    // Fetch data from the storage or create it if nonexistant
    var fetched = JSON.parse(localStorage.getItem("data"))
    if (fetched == null) {
        localStorage.setItem("data", JSON.stringify({}))
        fetched = JSON.parse(localStorage.getItem("data"))
    }

    // Set data
    for (box of boxes) {
        fetched[box.parentElement.lastChild.textContent] = box.checked
        localStorage.setItem("data", JSON.stringify(fetched))
    }
}