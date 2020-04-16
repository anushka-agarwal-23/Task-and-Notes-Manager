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