export const Catalog = (harvestedFood) => {
    let htmlString = ""

    for (let finalHarvest of harvestedFood) {
        htmlString += `<section class="plant">${finalHarvest.type}</section>`
    }
    return htmlString
}