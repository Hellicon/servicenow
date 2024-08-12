(function() {
    var url = "https://catfact.ninja/fact";
    var request = new sn_ws.RESTMessageV2();
    request.setEndpoint(url);
    request.setHttpMethod("GET");

    try {
        var response = request.execute();
        var responseBody = response.getBody();
        //gs.addInfoMessage("Response Body: " + responseBody); // Log the response body
        var responseObj = JSON.parse(responseBody);
        data.fact = responseObj.fact;
    } catch (ex) {
        gs.error("Failed to fetch cat fact: " + ex.message);
        data.fact = "Unable to fetch a cat fact at this time.";
    }
})();
