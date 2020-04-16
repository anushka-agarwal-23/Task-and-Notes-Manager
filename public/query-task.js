function fetchTasks (done) {
    $.get('/tasks', function (data) {
        done(data)
    })
}

function addTask (title, description, due, status, priority, done) {
    $.post('/tasks', {
        title: title,
        description : description,
        due : due,
        status : status,
        priority : priority
    }, function (data) {
        done(data)
    })
}

function getTaskById (id,done) {
    $.get('/tasks/'+id, function (data) {
        done(data)
    })
}

function updateTask (id,title, description, due, status, priority, done) {
    $.ajax({
        url: '/tasks/'+id,
        type: 'PUT',
        data: {
            title: title,
            description : description,
            due : due,
            status : status,
            priority : priority
        },
        success: function (data) {
            done(data)
        }
     })
}

function getNotesByTaskId(id,done) {
    $.get('/tasks/'+id+'/notes', function (data) {
        done(data)
    })
}

function addNoteforTask(id,text,done){
    $.post('/tasks/'+id+'/notes', {
        text: text,
        task_id: id
    }, function (data) {
        done(data)
    })
}

    
