const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end("Welcome to our home page")
    }
    else if (req.url === '/about') {
        res.end("Here is our history ")
    }
    else {
        res.end(`<h1>sorry</h1> 
        <p>the page you are looking for doesnt exist</p> 
        <a href ='/'>Back Home</a>`)
    }
})

server.listen(5000)