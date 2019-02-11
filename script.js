$(document).ready(function() {

    // localStorage.clear();

    if(localStorage.length == 0){
        $.getJSON("./students-data.json", function(json) {
            localStorage.setItem('studentsinfo', JSON.stringify(json))
        });
    } 

    // let length = JSON.parse(localStorage.studentsinfo).length
    // console.log(length)
    // console.log(JSON.parse(localStorage.studentsinfo)[0])

    // let data = JSON.parse(localStorage.getItem('studentsinfo'));
    // $('.test').text(JSON.stringify(data[0].firstname));

    // let n = 10;
    for(let i = 0; i < 10; i++) {
        $('tbody').append(`<tr class="entry">
            <th scope='row'>${i+1}</th>
            <td>${data[i].firstname}</td>
            <td>${data[i].lastname}</td>
            <td>${data[i].email}</td>
            <td>${data[i].location}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].address.permanent}</td>
            <td><button onclick="showModal(event)" class="btn btn-light btn-xs" data-toggle="modal" data-target="#exampleModal">More info</button></td>
        </tr>`);
    }

    // let entry = $('tbody').children().last().children().first().text();
    // console.log(entry);

    $('form.form-inline').submit(function(event) {
        event.preventDefault();
        var input = $('input').val();
        // $('.test').text(input);
        // $('.test').text(JSON.stringify(data[0].firstname));
        // $('.test').text(data[0].firstname);
        for(let el of data) {
            if(el.firstname == input || el.lastname == input || el.location.includes(input) || el.phone == input) {
                $('.entry').remove();
                $('tbody').append(`<tr class="entry">
                    <th scope='row'>${data.indexOf(el) + 1}</th>
                    <td>${el.firstname}</td>
                    <td>${el.lastname}</td>
                    <td>${el.email}</td>
                    <td>${el.location}</td>
                    <td>${el.phone}</td>
                    <td>${el.address.permanent}</td>
                    <td><button onclick="showModal(event)" class="btn btn-light btn-xs" data-toggle="modal" data-target="#exampleModal">More info</button></td>
                </tr>`);

                // $('.modal-body').html(
                //     `<ul>
                //         <li>First name: ${el.firstname}</li>
                //         <li>Last name: ${el.lastname}</li>
                //         <li>Email: ${el.email}</li>
                //         <li>Location: ${el.location}</li>
                //         <li>Phone: ${el.phone}</li>
                //         <li>Address communication: ${el.address.communication}</li>
                //         <li>Address permanent: ${el.address.permanent}</li>
                //         <li>Marks:
                //             <ul>
                //                 <li>English: ${el.marks.english}</li>
                //                 <li>Science: ${el.marks.science}</li>
                //                 <li>Computers: ${el.marks.computers}</li>
                //                 <li>Hardware: ${el.marks.hardware}</li>
                //             </ul>
                //         </li>
                //     </ul>`
                // )
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
        $('tbody').append(`<tr class="entry">
        <th scope='row'>${Number(entryNumber)+1}</th>
        <td>${values.firstname}</td>
        <td>${values.lastname}</td>
        <td>${values.email}</td>
        <td>${values.location}</td>
        <td>${values.phone}</td>
        <td>${values.address.permanent}</td>
        <td><button onclick="showModal(event)" class="btn btn-light btn-xs" data-toggle="modal" data-target="#exampleModal">More info</button></td>
        </tr>`);
        let storage = JSON.parse(localStorage.studentsinfo);
        storage.unshift(values);
        console.log(storage[0]);
        // console.log(storage[storage.length - 1]);
        localStorage.setItem('studentsinfo', JSON.stringify(storage));
        console.log(localStorage.studentsinfo);
        $('input').val('');
    });

})


let data = JSON.parse(localStorage.getItem('studentsinfo'));

function showModal(event) {
    console.log(event.target.parentElement.parentElement.children[0].innerText);
    let i = event.target.parentElement.parentElement.children[0].innerText - 1;
    // console.log(i);
    $('.modal-body').html(
        `<ul>
            <li>First name: ${data[i].firstname}</li>
            <li>Last name: ${data[i].lastname}</li>
            <li>Email: ${data[i].email}</li>
            <li>Location: ${data[i].location}</li>
            <li>Phone: ${data[i].phone}</li>
            <li>Address communication: ${data[i].address.communication}</li>
            <li>Address permanent: ${data[i].address.permanent}</li>
            <li> Marks:
                <ul>
                    <li>English: ${data[i].marks.english}</li>
                    <li>Science: ${data[i].marks.science}</li>
                    <li>Computers: ${data[i].marks.computers}</li>
                    <li>Hardware: ${data[i].marks.hardware}</li>
                </ul>
            </li>
        </ul>`
    )
}

function setNumber(number) {
    $('.entry').remove();
    let numberOfPages = 0;
    // alert(`Showing ${number} records`);
    numberOfPages = number;
    console.log(numberOfPages);
    let n = numberOfPages || 10;
    let j = 0;
    for(let i = j; i < j + n; i++) {;
        $('tbody').append(`<tr class="entry">
            <th scope='row'>${i+1}</th>
            <td>${data[i].firstname}</td>
            <td>${data[i].lastname}</td>
            <td>${data[i].email}</td>
            <td>${data[i].location}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].address.permanent}</td>
            <td><button onclick="showModal(event)" class="btn btn-light btn-xs" data-toggle="modal" data-target="#exampleModal">More info</button></td>
        </tr>`);
    }
}
