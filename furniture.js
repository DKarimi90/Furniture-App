function displayItems() {
    fetch("http://localhost:3000/furniture")
    .then(res => res.json())
    .then(data => displayFurniture(data))
}
const displayFurniture = (furniture) => {
    furniture.forEach(item => {
        const furnitureContainer = document.createElement("div")
        furnitureContainer.className = "class"
        furnitureContainer.innerHTML = `
        <img src = "${item.url}">
        <p>${item.price}</p>
        `
        const existingDiv = document.getElementById("furniture")
        existingDiv.appendChild(furnitureContainer)
    })

}
displayItems()

const footer = document.createElement("footer")
const toAppend = document.getElementById("container")
toAppend.appendChild(footer)
footer.innerText = "Created by David @ 2022"
footer.className = "footer"

