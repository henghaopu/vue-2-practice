
// we want to bind the message property to the value of input tag
let data = {
    
    message: 'Hello World!'
     
};

// ViewModel updates the model (Model sends notifications to ViewModel)

new Vue({
    
    // specify where to use data binding in view
    el: "#root",
    // associates ViewModel to Model (data binds model)
    data: data
})

// traditionally, we dive into the DOM, fetch some elements, and manipulate them
// now, we can do automatically data binding: bind the value of the input tag to the message property of the data object. we don't want to set up the event listener in input tag to say when the user keysdown/keysup on the input then we're going to update the value of the message in data 
//document.querySelector("#myInput").value = data.message;
