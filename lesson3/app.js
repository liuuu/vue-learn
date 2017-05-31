

Vue.component('greeting', {
  template: '<p>hey i an the reusable component {{name}} <button v-on:click="changeName">change</button></p>',
  data: function(){
    return {
      name: 'Uokish'
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Mario';
    }
  }
})


var one = new Vue({
  el: '#vue-one',
  data: {
    title: 'aoo1'
  },
  methods: {

  },
  computed: {
    greet: function(){
      return 'Hello from app one'
    }
  }
})
var two = new Vue({
  el: '#vue-two',
  data: {
    title: '222'
  },
  methods: {
    changeOneTitle: function(){
      one.title = 'changed by two'
    }
  },
  computed: {
    greet: function(){
      return 'Hello from app two'
    }
  }
})

new Vue({
  el:'#vue-ref',
  data:{
    output: 'Yout'
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.input.value);
      console.log(this.$refs.text.innerHTML);
      this.output = this.$refs.input.value;
    }
  }
})

var three = new Vue({
  el: '#vue-app2',
  data: {
    title: 'woe',
  },
  methods: {
    change: function(){
      this.title = 'liuuu';
    }
  }
})
