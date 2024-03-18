const froyoFlavors = prompt("Enter a list of comma-seperated froyo flavors", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")

const userInputString = froyoFlavors.split(',')

console.table(userInputString)

function getFroyoNumbers(userInputString) {

const froyoCount = {}

   userInputString.forEach((order) =>{
    if (froyoCount.hasOwnProperty(order)) {
        froyoCount[order]++;
    } else {
        froyoCount[order] = 1
    }
   })

   return froyoCount;
}

const froyoCount = getFroyoNumbers(userInputString)
console.log(froyoCount)

