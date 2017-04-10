var app = new Vue ({
  el: "#app",
  data: {
    title: "hi",
    offers: [
      {
        description: "take laundry to dry cleaners",
        created: new Date()
      },
      {
        description: "mow lawn",
        created: new Date()
      }
    ]
  },
  methods: {
    getDashboardOffers: function(){
      var url = "/offers";
      axios.get(url)
          .then(function(response){
            console.log(response);
          })
          .catch(function(err){
            console.log(err);
          });
    }
  },
  created: function(){
    this.getDashboardOffers();
  }
});
