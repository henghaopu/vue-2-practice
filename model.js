let data = {
    
    message: 'Hello World!',
    
    tasks: [
        
        { description: 'Go to the store', completed: true }, 
        { description: 'Finish screencast', completed: false }, 
        { description: 'Make donation', completed: false }, 
        { description: 'Clear inbox', completed: false }, 
        { description: 'Make dinner', completed: false }, 
        { description: 'Clean room', completed: true }
        
    ]
    
    
}; // delete the semi-colon helps to refresh

let reversedMessage = function () {
    return this.message.split('').reverse().join('');
};

let incompleteTasks = function () {
    
    return this.tasks.filter(function(task) {
        return !task.completed;
    })
    
};

/*

    https://alligator.io/js/filter-array-method/

    var newArray = array.filter(function(item) {
        return condition;
    });
*/