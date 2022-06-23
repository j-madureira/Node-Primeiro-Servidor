const http = require('http');

const pessoaDado = {nome:"Henrique",idade:"23",cpf:"32132321321312"}

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.end(JSON.stringify(pessoaDado));

}).listen(3000,(error)=>{
    if(error){
        console.log(error);
    }
    else{
    console.log("Servidor criado!");
    }
});