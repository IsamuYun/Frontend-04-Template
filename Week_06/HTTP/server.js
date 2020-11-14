const http = require('http');

http.createServer((request, response) => {
    let body = [];
    
    request.on("error", (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        /*
        let enc = new TextEncoder();
        for (let i = 0; i < body.length; i++) {
            body[i] = enc.encode(body[i]);
        }
        body = Buffer.concat(body).toString();
        */
        body = body.join("");
        console.log("body:", body);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(" Helo World\n");
    });
}).listen(8088);

console.log("server started");