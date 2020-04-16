const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/tasks.db'
})

const Tasks = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description:{
        type: Sequelize.STRING
    },
    due: {
        type: Sequelize.DATEONLY
    },
    status: {                         
        type: Sequelize.STRING,
        allowNull: false
    },
    priority:{
        type: Sequelize.STRING(10)
    }
    
})

const Notes = db.define('note',{
    note_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: Sequelize.STRING
    }
})

Notes.belongsTo(Tasks,{foreignKey: 'task_id'});
Tasks.hasMany(Notes,{foreignKey : 'task_id'});

module.exports = {
    db, Tasks, Notes
}