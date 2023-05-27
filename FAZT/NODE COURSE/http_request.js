const http = require("http");

const server = http.createServer(function (request, response) {
    //show user request
    console.log(request.url);

    //display text depending on where the user enters
    if (request.url == "/about") {
        response.write("Welcome to about");
        return response.end();

    } else if (request.url == "/home") {
        response.write("Welcome to home");
        return response.end();
    }


    response.write(`
    <h1>Page not found</h1>
    <p>try again</p>
    
    <a href="/home">return to home</a>`);
    response.end();
})

server.listen(3000);

console.table("Server listening on port 3000")