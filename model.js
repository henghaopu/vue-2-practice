let data = {
    
    newName: '',
    
    names: ['Joe', 'Mary', 'Jane', 'Jack']
     
};

let addName = function() {

    this.names.push(this.newName);

    this.newName = '';
    
}