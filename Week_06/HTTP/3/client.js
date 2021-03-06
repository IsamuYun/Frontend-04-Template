const net = require("net");

class Request {
    constructor(options) {
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || "/";
        this.body = options.body || {};
        this.headers = options.headers || {};
        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }

        if (this.headers["Content-Type"] === "application/json") {
            this.bodyText = JSON.stringify(this.body);
        }
        else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
        }
        this.headers["Content-Length"] = this.bodyText.length;
    }

    send(connection) {
        return new Promise((reslove, reject) => {
            const parser = new ResponseParser;
            if (connection) {
                connection.write(this.toString());
            }
            else {
                connection = net.createConnection(
                    {
                        host: this.host,
                        port: this.port
                    }, 
                    () => {
                        let enc = new TextEncoder();
                        let doc = enc.encode(this.toString());
                        connection.write(doc);
                    }
                )
            }
            connection.on('data', (data) => {
                console.log(data.toString());
                parser.receive(data.toString());
                if (parser.isFinished) {
                    reslove(parser.response);
                    connection.end();
                }
            });
            connection.on('error', (err) => {
                reject(err);
                connection.end();
            })
        });
    }

    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r
        ${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r\n
        ${this.bodyText}`
    }
}

class ResponseParser {
    constructor() {
        this.WAITTING_STATUS_LINE = 0;
        this.WAITTING_STATUS_LINE_END = 1;
        this.WAITTING_HEADER_NAME = 2;
        this.WAITTING_HEADER_SPACE = 3;
        this.WAITTING_HEADER_VALUE = 4;
        this.WAITTING_HEADER_LINE_END = 5;
        this.WAITTING_HEADER_BLOCK_END = 6;
        this.WAITTING_BODY = 7;

        this.current = this.WAITTING_STATUS_LINE;
        this.statusLine = "";

    }
    receive(string) {
        for (let i = 0; i < string.length; i++) {
            this.receiveChar(string.charAt(i));
        }
    }
    receiveChar(char) {

    }
}



void async function () {
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: "8088",
        path: "/",
        headers: {
            ["X-Foo2"]: "customed"
        },
        body: {
            name: "Isamu"
        }
    });

    let response = await request.send();

    console.log(response);

}();

