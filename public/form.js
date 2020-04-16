function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function openUpdateForm(id) {
      getTaskById(id,function (task) {
          document.getElementById("updateTaskId").value = task.id
          document.getElementById("updateTaskTitle").value = task.title
          document.getElementById("updateTaskDescription").value = task.description
          document.getElementById("updateTaskDue").value = task.due
          document.getElementById("updateTaskStatus").value = task.status
          document.getElementById("updateTaskPriority").value = task.priority  
      })
      document.getElementById("updateForm").style.display = "block";
  }
  
  function closeUpdateForm() {
    document.getElementById("updateForm").style.display = "none";
  }
  function openTaskCard() {
    document.getElementById("notes").style.display = "block";
  }
  function closeTaskCard() {
    document.getElementById("notes").style.display = "none";
  }