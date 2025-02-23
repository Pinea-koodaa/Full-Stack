const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!\n\n"); 
    
    if (request.url === "/about"){
        response.end("About Page");
    } else if (request.url === "/contact") {
        response.end("Contact Page");
    } else {
        response.end("Hello World!");
    }
    


})
.listen(3000); //the server object listens on port 3000
    
console.log("Server page: http://localhost:3000");
console.log("About page: http://localhost:3000/about");
console.log("Contact page: http://localhost:3000/contact");


   