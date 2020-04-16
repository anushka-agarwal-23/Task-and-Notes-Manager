const { Router } = require('express')
const { Tasks,Notes } = require('../db')

const route = Router()

route.get('/', async (req, res) => {
  const tasks = await Tasks.findAll()
  .then((tasks) => {
    res.status(200).send(tasks)
  })
  .catch((err) => {
    res.status(500).send({ error : 'Cannot retrive tasks'})
  })
})

route.get('/:id', async (req, res) => {
  if (isNaN(Number(req.params.id))) {
    return res.status(400).send({
      error: 'task id must be an integer',
    })
  }
  
  const task = await Tasks.findByPk(req.params.id)

  if (!task) {
    return res.status(404).send({
      error: 'No task found with id = ' + req.params.id,
    })
  }
  res.send(task)
})

route.post('/', async (req, res) => {
  if (typeof req.body.title !== 'string') {
    return res.status(400).send({ error: 'Task name not provided' })
  }
  const newTask = await Tasks.create({
      title: req.body.title,
      description : req.body.description,
      due: req.body.due,
      status: req.body.status,
      priority: req.body.priority
  })

  res.status(201).send({ success: 'New task added', data: newTask })
})

route.put('/:id', async (req, res) => {
  if (isNaN(Number(req.params.id))) {
    return res.status(400).send({
      error: 'task id must be an integer',
    })
  }

  await Tasks.update({
    title: req.body.title,
    description : req.body.description,
    due: req.body.due, //not getting updated
    status: req.body.status,
    priority: req.body.priority},
    {
      where : {id : req.params.id}
  }).catch(err =>
    console.error(err)
  )

  res.status(201).send({ success: 'task updated'})
})

route.get('/:id/notes', async (req, res) => {
  const notes = await Notes.findAll({
    where: {
      task_id: req.params.id}
    })
    .then((notes) => {
      res.status(200).send(notes)
    })
    .catch((err) => {
      res.status(500).send({ error : 'Cannot retrive notes'})
    })

})

route.post('/:id/notes', async (req, res) => {
  const newNote = await Notes.create({
    text : req.body.text,
    task_id : req.params.id
  })
  .then((newNote) => {
    res.status(201).send({ success: 'New note added', data: newNote })
  })
  .catch((err) => {
    res.status(500).send({ error : 'Cannot add new note'})
  })
  
})

module.exports = route