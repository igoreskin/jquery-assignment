$(document).ready(function() {

    if(localStorage.length == 0){
        $.getJSON("./students-data.json", function(json) {
            localStorage.setItem('studentsinfo',JSON.stringify(json))
        });
    } 

    
})