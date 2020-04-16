$(function () {

    let taskList = $('#task-list')

    fetchTasks(function (tasks) {
        taskList.empty()
        for (task of tasks) {
            taskList.append(createTaskForList(task))
        }
    })

})

// by default tomorrow date in due box 

var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var tomday = tomorrow.getDate();
var tommonth = tomorrow.getMonth() + 1;
var tomyear = tomorrow.getFullYear();
if(tomday<10){
    tomday='0'+tomday
} 
if(tommonth<10){
    tommonth='0'+tommonth
} 
tomorrow = tomyear+'-'+tommonth+'-'+tomday;
$('#taskDue').attr('value', tomorrow);