api.controller = function($http) {
    /* widget controller */
    var c = this;
  
    // Initialize catFact as an empty string or a placeholder
    //c.catFact = "Loading cat fact...";
  
    // Fetch a random cat fact
    c.getCatFact = function() {
              console.log("Function Launched");
        $http.get('https://catfact.ninja/fact').then(function(response) {
            c.catFact = response.data.fact;
        }, function(error) {
            console.error("Error fetching cat fact: ", error);
            c.catFact = "Failed to load cat fact.";
        });
    };
  
    // Initialize by fetching a cat fact when the widget loads
    c.getCatFact();
  };
  