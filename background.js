browser.browser_action.onClicked.addListener(clearData)

function clearData() {
    localStorage.setItem("data", JSON.stringify({}))
}
