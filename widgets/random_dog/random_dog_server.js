(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
  
    // Fetch a random dog picture
    
      try {
        // 'Random Dog' stored as outbound REST Message in SN
        var r = new sn_ws.RESTMessageV2('Random Dog', 'Default GET');
              
        // Send GET Request
        var response = r.execute();
              
        // Store response
        var responseBody = response.getBody();
        var httpStatus = response.getStatusCode();
              
        responseBody = JSON.parse(responseBody); // Parsing the response to JSON
        data.dogImage = responseBody.message;
  
      } catch(ex) {
        gs.addErrorMessage('Error: ' + ex.message);
      }
   
  })();
  