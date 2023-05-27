const http = require("http");

http.createServer( function(request, response){
    response.write("answering the request");
    response.end();
}).listen(3000);

console.table("Server listening on port 3000")