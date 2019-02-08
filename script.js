$(document).ready(function() {

    if(localStorage.length == 0){
        $.getJSON("./students-data.json", function(json) {
            localStorage.setItem('studentsinfo', JSON.stringify(json))
        });
    } 

    let length = JSON.parse(localStorage.studentsinfo).length
    console.log(length)
    console.log(JSON.parse(localStorage.studentsinfo)[length - 1])

    let data = JSON.parse(localStorage.getItem('studentsinfo'));
    $('.test').text(JSON.stringify(data[0].firstname));

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

    function nestedInput() {
        $('<input>').attr({
          type: 'visible',
          id: 'testInput',
          value: 'Test',
          placeholder: 'Permanent',
        }).appendTo($('input[name="address"]'));
        
        //get value of new nested input and write it to output div
        $('.test').text($('#testInput').val());
      }

    nestedInput();


    let entry = $('tbody').children().last().children().first().text();
    console.log(entry);

//     $('tbody').append(`<tr>
//     <th scope='row'>1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>mark@mark.com</td>
//     <td>New York</td>
//     <td>123-123-1234</td>
//     <td>New York, USA</td>
//   </tr>`);

    $('form').submit(function(event) {
        event.preventDefault();
        var $inputs = $('form :input');
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        $('.test').text(JSON.stringify(values))
        let entryNumber = $('tbody').children().last().children().first().text();
        $('tbody').append(`<tr>
        <th scope='row'>${Number(entryNumber)+1}</th>
        <td>${values.firstname}</td>
        <td>${values.lastname}</td>
        <td>${values.email}</td>
        <td>${values.location}</td>
        <td>${values.phone}</td>
        <td>${values.address}</td>
        </tr>`);
        // let storage = JSON.parse(localStorage.studentsinfo);
        // storage.unshift(values);
        // console.log(storage[storage.length - 1]);
        // localStorage.setItem('studentsinfo', JSON.stringify(storage));
        $('input').val('');
    });

})

