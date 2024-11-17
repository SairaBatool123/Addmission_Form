
// student form
const studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let grade = document.getElementById('class').value

    //table
    let table = document.getElementById('studentTable').querySelector('tbody')
    let newTr = table.insertRow();

    let td1 = newTr.insertCell(0)
    let td2 = newTr.insertCell(1)
    let td3 = newTr.insertCell(2)
    let td4 = newTr.insertCell(3)

    // here we get the data from the (variable) of student form 
    td1.innerHTML = name
    td2.innerHTML = age
    td3.innerHTML = grade
    td4.innerHTML = `<button class="new-btn" onclick="editRow(this)">Edit</button><button class="new-btn" onclick="deleteRow(this)">Delete</button>`

    studentForm.reset()

    // end of student form
})
function deleteRow(button) {
    let tr = button.parentNode.parentNode;
    tr.parentNode.removeChild(tr)
}
function editRow(button) {
    let tr = button.parentNode.parentNode

    let index = tr.rowIndex - 1
    let name = tr.cells[0].innerHTML
    let age = tr.cells[1].innerHTML
    let grade = tr.cells[2].innerHTML

    // here we get the data from the (variable) of student form
    document.getElementById('editIndex').value = index
    document.getElementById('editName').value = name
    document.getElementById('editAge').value = age
    document.getElementById('editClass').value = grade

    // edit Form 
    const eidtForm = document.getElementById('editForm')
    eidtForm.classList.remove('hidden')
}
const editStudentDetail = document.getElementById('editStudentDetail')

editStudentDetail.addEventListener('submit', function (e) {
    e.preventDefault()

    let index = document.getElementById('editIndex').value
    let name = document.getElementById('editName').value
    let age = document.getElementById('editAge').value
    let grade = document.getElementById('editClass').value

    let table = document.getElementById('studentTable').querySelector('tbody')
    let tr = table.rows[index]

    tr.cells[0].innerHTML = name
    tr.cells[1].innerHTML = age
    tr.cells[2].innerHTML = grade

    document.getElementById("editForm").classList.add('hidden')
})