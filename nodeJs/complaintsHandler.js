let consts = require('./consts')

const handleComplaint = function(complaint){
    switch (complaint.type){
        case consts.FINANCE:
            console.log("Money doesn't grow on trees, you know.")
            break
        case consts.WEATHER:
            console.log("It is the way of nature. Not much to be done.")
            break
        case consts.EMOTIONS:
            console.log("It'll pass, as all things do, with time.")
            break
        default:
            break
    }
}

let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS
}

handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."
