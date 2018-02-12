var app = new Vue({
    
    el: '#root',
    
    data: data,
    
    mounted(){
        document.querySelector('#myBtn').addEventListener('click', () => {
    
            let name = document.querySelector('#myInput');

            app.names.push(name.value);

            name.value = '';
        });
    }
    
});





