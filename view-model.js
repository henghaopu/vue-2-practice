// why Vue.component need to write before new Vue?
Vue.component('task', {
    
    template: '<li><slot></slot></li>'
    
});


new Vue({
    
   el: '#root' 
    
    
});


