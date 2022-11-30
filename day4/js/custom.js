let students = [
    {id: 1, name: 'Ram', email: 'ram@gmail.com', address: "Kathmandu"},
    {id: 2, name: 'Sophia', email: 'sophia@gmail.com', address: "Bhaktapur"},
    {id: 3, name: 'John', email: 'john@gmail.com', address: "Lalitpur"},
]
function $(id) {
    return document.getElementById(id);
}
function showStudents() {
    let outPut = '';
    students.forEach(function (student, index) {
        outPut += `<tr>
                    <td>${++index}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.address}</td>
                    <td>
                          <button onclick="updateStudent(${student.id})">Update</button>
                         <button onclick="deleteRecord(${student.id})">Delete</button>
                    
                    </td>
                </tr>`;
    });

    $('students_result').innerHTML = outPut;
}

showStudents();

let incrementId = 4;
document.querySelector('#add_student').addEventListener('click', function (e) {
    e.preventDefault();
    let name = $('name').value;
    if (name == '') {
        alert('Please enter name');
        return false;
    }
    let email = $('email').value;
    let address = $('address').value;
    let criteria = $('criteria').value;
    if (criteria == '') {
        let insertItems = {id: incrementId++, name, email, address};
        students.push(insertItems);
        showStudents();
        document.querySelector('form').reset();
    } else {
        let updateStudent = getStudentById(criteria);
        updateStudent.name = name;
        updateStudent.email = email;
        updateStudent.address = address;
        showStudents();
        document.querySelector('form').reset();
        $('add_student').innerHTML = 'Add Student';
        $('criteria').value = '';
    }

});

function deleteRecord(id) {
    students = students.filter(function (student) {
        return student.id != id;
    });
    showStudents();
}

function getStudentById(id) {
    return students.find(function (student) {
        return student.id == id;
    });
}

function updateStudent(id) {
    let student = getStudentById(id);
    $('name').value = student.name;
    $('email').value = student.email;
    $('address').value = student.address;
    $('criteria').value = id;
    $('add_student').innerHTML = 'Update Student';
}