$(document).ready(function() {


        $.getJSON("./students.json", function(json) {
            console.log(json);
            $(".container").text(JSON.stringify(json[0].firstname));
        })
 



})