import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCarrots } from "./seeds/carrots.js"
import { createCorn } from "./seeds/corn.js"
import { createKale } from "./seeds/kale.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

/*In this module, define and export a plantSeeds function.

The function must accept the year's planting plan as input (i.e. it must define a parameter - array).

The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays. -nested for loop 

As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).

Take that seed and add it to the array of plants in the field module.*/

export const plantSeeds = (plantingPlanArray) => {
    const asparagus = createAsparagus()
    const corn = createCorn()
    const wheat = createWheat()
    const soybean = createSoybean()
    const sunflower = createSunflower()
    const potato = createPotato()
    const kale = createKale()
    const carrots = createCarrots()

    for (let i = 0; i < plantingPlanArray.length; i++) {
        for (let j = 0; j < plantingPlanArray[i].length; j++) {
            if (plantingPlanArray[i][j] === "Asparagus") {
                addPlant(asparagus)
            } else if (plantingPlanArray[i][j] === "Potato") {
                addPlant(potato)
            } else if (plantingPlanArray[i][j] === "Soybean") {
                addPlant(soybean)
            } else if (plantingPlanArray[i][j] === "Sunflower") {
                addPlant(sunflower)
            } else if (plantingPlanArray[i][j] === "Wheat") {
                addPlant(wheat)
            } else if (plantingPlanArray[i][j] === "Corn") {
                addPlant(corn)
            } else if (plantingPlanArray[i][j] === "Kale") {
                addPlant(kale)
            } else if (plantingPlanArray[i][j] === "Carrots") {
                addPlant(carrots)
            } else {
                console.log("Hey dumb dumb, you screwed up the nested for loop. Fix it First")
            }
        }
    }
}