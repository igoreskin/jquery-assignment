$(document).ready(function() {

    if(localStorage.length == 0){
        $.getJSON("./students-data.json", function(json) {
            localStorage.setItem('studentsinfo', JSON.stringify(json))
        });
    } 

    let data = JSON.parse(localStorage.getItem('studentsinfo'));
    // $('.test').text(JSON.stringify(data[0].firstname));

    for(let i = 0; i < 10; i++) {
        $('tbody').append(`<tr>
    <th scope='row'>${i+1}</th>
    <td>${data[i].firstname}</td>
    <td>${data[i].lastname}</td>
    <td>${data[i].email}</td>
    <td>${data[i].location}</td>
    <td>${data[i].phone}</td>
    <td>${data[i].address.permanent}</td>
    </tr>`);
    }

//     $('tbody').append(`<tr>
//     <th scope='row'>1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>mark@mark.com</td>
//     <td>New York</td>
//     <td>123-123-1234</td>
//     <td>New York, USA</td>
//   </tr>`);


})