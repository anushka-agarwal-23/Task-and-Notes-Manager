function addNoteforTaskCard(id){
    let noteText = $('#noteText')
    addNoteforTask(
    id,
    noteText.val(),
    function (note) {
        window.alert("Note Added ")
        location.reload(true)
    })
}

function createTaskForList(task){
    return $(
        `<tr>
        <td><button onclick="getTaskforTaskCard(${task.id});openTaskCard()">Notes</button></td>
        <td> ${task.title}</td>
        <td> ${task.description} </td>
        <td> ${task.due} </td>
        <td> ${task.status} <input type="checkbox" id="myCheck" disabled> </td>
        <td> ${task.priority} </td>
        <td> <button id="updateTask" onclick="openUpdateForm(${task.id})" class="btn btn-secondary">Edit</button> </td>
        </tr>
        <script>
        if(task.status === 'completed'){
            $("#myCheck").prop("checked", true);
        }
        else if(task.status === 'incomplete'){
            $("#myCheck").prop("checked", false);
        }
        </script>`
    )
}
