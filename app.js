// student form
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
    var grade = document.getElementById('class').value

    //table
    var table = document.getElementById('studentTable').querySelector('tbody')
    var newTr = table.insertRow();

    var td1 = newTr.insertCell(0)
    var td2 = newTr.insertCell(1)
    var td3 = newTr.insertCell(2)
    var td4 = newTr.insertCell(3)

    // here we get the data from the (variable) of student form 
    td1.innerHTML = name
    td2.innerHTML = age
    td3.innerHTML = grade
    td4.innerHTML = `<button class="new-btn" onclick="editRow(this)">Edit</button><button class="new-btn" onclick="deleteRow(this)">Delete</button>`

    document.getElementById('studentForm').reset()

    // end of student form
})
function deleteRow(button) {
    var tr = button.parentNode.parentNode;
    tr.parentNode.removeChild(tr)
}
function editRow(button) {
    var tr = button.parentNode.parentNode

    var index = tr.rowIndex - 1
    var name = tr.cells[0].innerHTML
    var age = tr.cells[1].innerHTML
    var grade = tr.cells[2].innerHTML


    document.getElementById('editIndex').value = index
    document.getElementById('editName').value = name
    document.getElementById('editAge').value = age
    document.getElementById('editClass').value = grade
    // edit Form 
    document.getElementById('editForm').classList.remove('hidden')
}
document.getElementById('editStudentDetail').addEventListener('submit', function (e) {
    e.preventDefault()

    var index = document.getElementById('editIndex').value
    var name = document.getElementById('editName').value
    var age = document.getElementById('editAge').value
    var grade = document.getElementById('editClass').value

    var table = document.getElementById('studentTable').querySelector('tbody')
    var tr = table.rows[index]

    tr.cells[0].innerHTML = name
    tr.cells[1].innerHTML = age
    tr.cells[2].innerHTML = grade

    document.getElementById("editForm").classList.add('hidden')
})