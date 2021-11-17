function switchTab(id) {
    let currentTab = document.getElementsByClassName("active")
    let newTab = document.getElementById(id)
    currentTab[0].classList.toggle("show")
    currentTab[0].classList.toggle("active")
    newTab.classList.toggle("show")
    newTab.classList.toggle("active")
}