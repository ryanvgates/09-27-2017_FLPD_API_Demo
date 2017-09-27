var app = new Vue({
  el: '#app',
  data: {
  	message: []
  },
  methods: {
  	showLongestToReport: function(){
      this.$http.get('https://fortlauderdale.data.socrata.com/resource/7cht-qcbm.json').then(response => {
        this.$data.message = response.body;
      }, response => {
        console.log(response);
      });
  	}
  },
});