/*Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.*/

export const growingPlants = []

/*Define and export a function named addPlant.
The addPlant function must accept a seed object as input. The function will add the seed to the field .*/

//↓This is probably wrong and needs to be looked at later↓
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (let i = 0; i < seedObject.length; i++) {
            growingPlants.push(seedObject[i])
        }
    } else {
        growingPlants.push(seedObject)
    }
}

/*Define and export a function named usePlants that returns a copy of the array of plants.*/
export const usePlants = () => {
    return growingPlants.map(growingPlants => ({ ...growingPlants }))
}
