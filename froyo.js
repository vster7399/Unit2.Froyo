let froyoChoices = prompt(
    "Please enter your froyo choices separated by commas.");
 
console.log(froyoChoices)

const stringArray = froyoChoices.split(",");
console.log(stringArray);

const tallyFlavors = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0 
};

let number = [];
for (let i =0; i < stringArray.length; i++) {
    const tallyFlavors = stringArray[i];
    if(stringArray === 'vanilla') { 
       tallyFlavors.vanilla += 1;
    } else if (stringArray === 'strawberry') { 
        tallyFlavors.strawberry += 1;
    } else if (stringArray === 'coffee') { 
        tallyFlavors.coffee += 1;
    } 
}
console.log(tallyFlavors)  
console.table(tallyFlavors)