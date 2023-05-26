/*Each of these functions should return an object with the following properties. Look at the table below the instructions to see what the values for each object are.
type
height
output

Corn	
Height: 180	
Output: 6 

The one exception is corn. The createCorn function should return an array with two identical objects in it. Each with the proper keys and values.*/

export const createCorn = () => {
    return [
    {
        type: "Corn",
        height: 180,
        output: 6
    },
    {
        type: "Corn",
        height: 180,
        output: 6
    }
]
}