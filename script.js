$(document).ready(function() {

    // localStorage.clear();

    if(localStorage.length == 0){
        $.getJSON("./students-data.json", function(json) {
            localStorage.setItem('studentsinfo', JSON.stringify(json))
        });
    } 

    // let length = JSON.parse(localStorage.studentsinfo).length
    // console.log(length)
    // console.log(JSON.parse(localStorage.studentsinfo)[length - 1])

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

    $('form.form-inline').submit(function(event) {
        event.preventDefault();
        var input = $('input').val();
        // var modal = $('.modal');
        // $('.test').text(input);
        // $('.test').text(JSON.stringify(data[0].firstname));
        // $('.test').text(data[0].firstname);
        for(let el of data) {
            if(el.firstname == input || el.lastname == input || el.location.includes(input) || el.phone == input) {
                $('.test').text(el.address.communication);
                $('.modal-body').html(
                    `<ul>
                        <li>First name: ${el.firstname}</li>
                        <li>Last name: ${el.lastname}</li>
                        <li>Email: ${el.email}</li>
                        <li>Location: ${el.location}</li>
                        <li>Phone: ${el.phone}</li>
                        <li>Address communication: ${el.address.communication}</li>
                        <li>Address permanent: ${el.address.permanent}</li>
                        <li> Marks:
                            <ul>
                                <li>English: ${el.marks.english}</li>
                                <li>Science: ${el.marks.science}</li>
                                <li>Computers: ${el.marks.computers}</li>
                                <li>Hardware: ${el.marks.hardware}</li>
                            </ul>
                        </li>
                    </ul>`
                )
            }
        }
    })

    $('form.input-form').submit(function(event) {
        event.preventDefault();
        var $inputs = $('form.input-form :input');
        let firstname = $('form.input-form #firstname').val();
        let lastname = $('form.input-form #lastname').val();
        console.log(firstname);
        if (/[^a-zA-Z]+/.test(firstname) || /[^a-zA-Z]+/.test(lastname) || firstname.length === 0  || lastname.length === 0) {
            alert("Please enter student's first and last name");
            return;
        }
        var values = {};
        values.address = {};
        $inputs.each(function() {
            if (this.name != 'communication' && this.name != 'permanent') {
                values[this.name] = $(this).val();
            } 
            else {
                values.address[this.name] = $(this).val();
            }
           
        });
        // $('.test').text(JSON.stringify(values))
        let entryNumber = $('tbody').children().last().children().first().text();
        $('tbody').append(`<tr>
        <th scope='row'>${Number(entryNumber)+1}</th>
        <td>${values.firstname}</td>
        <td>${values.lastname}</td>
        <td>${values.email}</td>
        <td>${values.location}</td>
        <td>${values.phone}</td>
        <td>${values.address.permanent}</td>
        </tr>`);
        let storage = JSON.parse(localStorage.studentsinfo);
        storage.unshift(values);
        // console.log(values)
        // console.log(storage[storage.length - 1]);
        localStorage.setItem('studentsinfo', JSON.stringify(storage));
        $('input').val('');
    });

})

