const validator = require('validator');
const faker = require('faker');


//Ex. 1
// Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan'))

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

console.log(validator.isMobilePhone("786-329-9958", 'en-US'))

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"

console.log(validator.blacklist(text.toLowerCase(),blacklist))


const makeHuman = function(number){
    for (i=0; i<number; i++){
        const randomName = faker.name.findName()
        const companyName = faker.company.companyName()
        const avatar = faker.image.avatar()
        console.log(randomName, ' ', companyName, ' ', avatar)
    }
}

makeHuman(3)