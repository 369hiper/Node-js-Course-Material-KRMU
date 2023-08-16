const http = require('http')
const fs = require('fs')

// Reading a file using the read file sync
const fileContent = fs.readFileSync('abc.html')

const server = http.createServer((req,res)=>{
    //Firstly we are going to encode the request
    //Then we are going to get a response
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent)

})

//Now we are creating a port which is going to listen to that server
server.listen(80, "127.0.0.1", () =>{
    console.log("Listening on port 80")
    // if we program it on the port 8000 
    // then it won't be accessible on the URL: 127.0.0.1 
    // Then, we will have to do something like 127.0.0.1/8000
})