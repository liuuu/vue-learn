var item = new Vue({
  el:'#vue-app',
  data: {
    name: 'liuuu',
    job: 'ninja',
    website: 'http://baidu.com',

  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' '+ this.name;
    }
  }
});

var item1= new Vue({
  el: '.vue-test',
  data: {
    available: false,
    name: 'lii',
    age: 24,
    x:0,
    y:0
  },
  methods: {
    add: function(value){
      this.age += value
    },
    subtract: function(value){
      this.age -= value
    },
    updateCor: function(e){
      console.log(e);
      this.x = e.offsetX
      this.y = e.offsetY
    },
    click: function(){
      alert('U clicked me');
    },
    logAge: function(e){
      this.age = e.target.value;
    }
  }
})

var ite = new Vue({
  el: '.condition',
  data:{
    error: true,
    success: false,
  },

})

var vFor = new Vue({
  el: '.v-for',
  data: {
    names:['liu', 'lee', 'leo']
  }
})
