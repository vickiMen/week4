let bla = require('./jquery.js')

$('body').on('click', '.myDiv', function(){
    $(this).css('background-color', "#f39c12")
})

$.ajax({
    url: 'http://data.nba.net/10s/prod/v1/2016/players.json',
    method: 'GET',
    dataType: 'json',
    success: function(data){
        console.log(data)
    }
})

