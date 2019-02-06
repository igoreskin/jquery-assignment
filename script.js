$(document).ready(function() {


        $.getJSON("./students.json", function(json) {
            console.log(json.length);
            $(".container").text(JSON.stringify(json));
        })
 



})