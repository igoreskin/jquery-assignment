$(document).ready(function() {


        $.getJSON("./students-data.json", function(json) {
            console.log(json.length);
            localStorage.setItem('studentsinfor',JSON.stringify(json))
            $(".container").text(JSON.stringify(json));
        })
})