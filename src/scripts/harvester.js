// define and export a harvestPlants function.
// The harvestPlants function must accept the plants array as input

export const harvestPlants = (plantsArray) => {
    // The function will return an array of seed objects.
    let answer = []

    for (let i = 0; i < plantsArray.length; i++) {
        let outputNum = plantsArray[i].output;
        let cornOutputNum = outputNum / 2;

        if (plantsArray[i].type !== "Corn") {
            for (let j = 0; j < outputNum; j++) {
                answer.push(plantsArray[i])
            }
        }
        if  (plantsArray[i].type === "Corn") {
            for (let k = 0; k < cornOutputNum; k++) {
                answer.push(plantsArray[i])
            }
        }
    }
    return answer
}



// export const harvestPlants = (plantsArray) => {
//     // The function will return an array of seed objects.
//     let answer = []
//     debugger
//     for (let i = 0; i <= plantsArray.length; i++) {
//         let outputNum = plantsArray[i].output
//         for (let j = 0; j < outputNum; j++) {
//             if (plantsArray.type === "Corn") {
//                 for (let k = 0; k < outputNum / 2; k++)
//                     answer.push(plantsArray[k])
//             }
//             answer.push(plantsArray[i])
//         }
//     }
//     return answer
// }
