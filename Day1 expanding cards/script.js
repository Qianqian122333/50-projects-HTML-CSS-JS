const panels = document.querySelectorAll(".panel")
const active = document.querySelector(".active")
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active")
        panel.classList.add("active")
    })
})