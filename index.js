let colorsArray = []

document.getElementById("btn").addEventListener("click", renderColors)

function renderColors(){
    const chosenColor = document.getElementById("color").value.slice(1)
    const chosenMode = document.getElementById("mode").value
        
    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenMode}&count=5`)
        .then(response => response.json())
        .then(color => {
            for (color of color.colors) {
                colorsArray.push(color.hex.value)
            }
            getColorHtml()
            colorsArray = []
        })
}

function getColorHtml(){
    let colorHtml = ""
    let codeHtml = ""
    for (color of colorsArray) {
        colorHtml += `
            <div class="color" style="background:${color}"></div>
        `
        codeHtml += `
            <div class="code">${color}</div>
        `
    }
    document.getElementById("color-container").innerHTML = colorHtml
    document.getElementById("code-container").innerHTML = codeHtml
}

renderColors()