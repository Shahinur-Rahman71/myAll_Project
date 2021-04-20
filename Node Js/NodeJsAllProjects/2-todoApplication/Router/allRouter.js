const router = require('express').Router();
const Todo = require('../Schema/schema')

router.get('/', (req, res, next) => {
    Todo.find({})
        .then(result => {
            let todos = result.filter( (todo) => {
                // console.log(todo.done);
                return !todo.done;
            })

            let todosDone = result.filter( (todo) => {
                 console.log(todo.done);
                return todo.done;
            })

            res.render('design', { todos: todos, todosDone});
        })   
})

router.post('/todos', (req, res, next) => {
    const todoApp = new Todo({
        description: req.body.description
    })
//Here we save data from description input field.
    todoApp.save()
        .then( data=> {
            console.log(data)
             res.redirect('/');
            
        })
        .catch(err => {
            console.log(err)
            res.redirect('/');
        })
})

router.post('/todos/:id/completed', (req, res) => {
    const todoId = req.params.id;
// it's work for Done and Owo! button
    Todo.findById(todoId)
        .exec() // execute exact function
        .then( result => {
            result.done = !result.done
            return result.save();
        })
        .then( () => {
            res.redirect('/');
        })

})

module.exports = router