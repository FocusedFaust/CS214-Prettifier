const data_key = 'data'

console.log("The extension is up and running");

var headings = document.querySelectorAll("h2,h3,h4")

for (const title of headings) {
    //console.log(title.lastChild.textContent)
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.id = "work_tracker"
    checkbox.style.display = 'block'
    checkbox.style.marginRight = '1.5em'
    checkbox.checked = JSON.parse(localStorage.getItem(data_key))[title.querySelector('a').textContent]
    checkbox.onclick = allCheckboxes

    title.style.display = 'flex'
    title.insertBefore(checkbox, title.firstChild)
}

allCheckboxes() // Update ToC upon launch

function allCheckboxes() {
    var boxes = document.querySelectorAll("#work_tracker")
    
    // Fetch data from the storage or create it if nonexistant
    var fetched = JSON.parse(localStorage.getItem(data_key))
    if (fetched == null) {
        localStorage.setItem(data_key, JSON.stringify({}))
        fetched = JSON.parse(localStorage.getItem(data_key))
    }

    // Set data
    for (const box of boxes) {
        fetched[box.parentElement.querySelector('a').textContent] = box.checked // Very spaghetti but it works
        localStorage.setItem(data_key, JSON.stringify(fetched))
    }

    // Go through the table of content to change the color depending on completion
    for (const entry of document.querySelectorAll('li')) {
        const elemA = entry.querySelector('a')
        if (elemA != null && elemA.textContent in JSON.parse(localStorage.getItem(data_key))) {
            const text = elemA.textContent
            const value = JSON.parse(localStorage.getItem(data_key))[text]
            if (value == true) {
                elemA.style.color = '#2a5418ff'
                //elemA.style.fontWeight = 'bold'
            }
            else {
                elemA.style.color = '#888'
                //elemA.style.fontWeight = 'normal'
            }
        }
    }
}