// const moment = require('moment')

// let timeNow = new Date()
// console.log(timeNow)

// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow) //January 3rd, 2017


const request = require('request')

request('http://www.omdbapi.com/?apikey=fa192409&t=the+lion+king', function(err, response){
    let data = JSON.parse(response.body)
    let releasedYear = data.Released
    console.log(releasedYear)
})