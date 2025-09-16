console.log("The extension is up and running");

var headings = document.querySelectorAll("h3")
const localData = {}

for (head of headings){
    //console.log(head.lastChild.textContent)
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = "work_tracker"
    checkbox.style.display = 'block'
    checkbox.checked = localData[head.lastChild.textContent]
    //checkbox.onclick = checkboxClicked(checkbox, head)
    checkbox.addEventListener("click", () => checkboxClicked(checkbox, head))

    head.insertAdjacentElement('afterbegin', checkbox)  // On top of
    //head.appendChild(checkbox)                        // Below
}

function checkboxClicked(box, parent) {
    console.log(box.checked)
    // Fetch data from the storage or create it if nonexistant
    var fetched = JSON.parse(localStorage.getItem("data"))
    if (fetched == null) {
        localStorage.setItem("data", JSON.stringify(localData))
        fetched = JSON.parse(localStorage.getItem("data"))
    }

    // Set data
    fetched[parent.lastChild.textContent] = box.checked
    localStorage.setItem("data", JSON.stringify(fetched))
}