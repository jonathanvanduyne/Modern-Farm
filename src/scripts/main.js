import { addPlant, growingPlants, usePlants } from "./field.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";


//plan
const yearlyPlan = createPlan()
console.log(yearlyPlan)

//tractor
const tractorPlanting = plantSeeds(yearlyPlan)
console.log(tractorPlanting)
console.log(growingPlants)

//field
const copyPlants = usePlants(growingPlants)
console.log(copyPlants)

//harvestor
const harvesterTest = harvestPlants(copyPlants)
console.log(harvesterTest)

//Selling the Harvest
const foodPosting = Catalog((harvesterTest))

const htmlListElement = document.querySelector(".container")
htmlListElement.innerHTML = foodPosting

