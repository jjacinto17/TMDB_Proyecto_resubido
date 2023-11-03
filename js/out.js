new Vue({
    el: '#appOut',
    data: {
      
    },
    methods: {
        logout(){
            localStorage.removeItem("logged");
            window.location.href = "index.html";
          }
     
    }

  });