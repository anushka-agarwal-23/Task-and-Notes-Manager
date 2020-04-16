$(function () {
    let taskTitle = $('#taskTitle')
    let taskDescription = $('#taskDescription')
    let taskDue = $('#taskDue')
    let taskStatus = $('#taskStatus')
    let taskPriority = $('#taskPriority')

    $('#btnTaskAdd').click(function () {

        addTask(
            taskTitle.val(),
            taskDescription.val(),
            taskDue.val(),
            taskStatus.val(),
            taskPriority.val(),
            function () {
                window.alert("Added to Database ")
                location.reload(true)
            }
        )

    })


})

function createTaskForList(task){
    return $(
        `<tr>
        <td> ${task.title}</td>
        <td> ${task.description} </td>
        <td> ${task.due} </td>
        <td> ${task.status}
        <td> ${task.priority} </td>
        <td><button onclick="getNotesList(${task.id});openTaskCard();" data-toggle="modal" data-target="#notes">View</button></td>
        <td> <button id="updateTask" onclick="openUpdateForm(${task.id})" class="btn btn-secondary btn-info btn-lg" data-toggle="modal" data-target="#updateForm">Edit</button> </td>
        </tr>`
    )
}