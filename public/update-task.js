$(function () {
    let taskTitle = $('#updateTaskTitle')
    let taskDescription = $('#updateTaskDescription')
    let taskDue = $('#updateTaskDue')
    let taskStatus = $('#updateTaskStatus')
    let taskPriority = $('#updateTaskPriority')
    let taskId = $('#updateTaskId')

    $('#updateTask').click(function () {

        updateTask(
            taskId.val(),
            taskTitle.val(),
            taskDescription.val(),
            taskDue.val(),
            taskStatus.val(),
            taskPriority.val(),
            function () {
                window.alert("Updated in Database")
                location.reload(true)
            }
        )

    })

})