var app = new Vue({
  el: '#app',
  data: {
  	test: []
  },
  methods: {
  	showLongestToReport: function(){
      this.$http.get('https://fortlauderdale.data.socrata.com/resource/7cht-qcbm.json').then(response => {
        var items = response.body;
        items.sort(function(x, y){
          function timeToReport(x){
            return new Date(Date.parse(x.date_rept)) - new Date(Date.parse(x.date_occu));
          };
          return timeToReport(x) - timeToReport(y);
        });
        this.$data.test = items.slice(0,5);
      }, response => {
        console.log(response);
      });
  	}
  },
});