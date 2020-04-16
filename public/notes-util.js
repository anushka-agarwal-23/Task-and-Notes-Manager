function getNotesList(id)
{
    document.getElementById("notes").style.display = "block";
    document.getElementById('taskid').value = id
    let notelist = $("#notelist")
    getNotesByTaskId(id,function (notes){
    notelist.empty()
    for(note of notes){
        notelist.append(createNote(note))
    }
  })
}
 
function createNote(note)
{
  return $(`
   <li>${note.text}</li>
  `
  )
}

function addNoteforTaskCard(){
    let id =  document.getElementById('taskid').value
    let noteText = $('#noteText')
    addNoteforTask(
    id,
    noteText.val(),
    function (note) {
        window.alert("Note Added ")
        location.reload(true)
    })
}