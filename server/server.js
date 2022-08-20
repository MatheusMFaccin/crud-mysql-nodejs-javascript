const PORT = 3000;
const mysql = require('mysql2');
const express = require('express');
const bodyparser = require('body-parser');
var path = require("path");
const { appendFile } = require('fs');

const server = express();

server.use(bodyparser.urlencoded({extended:true}));
var conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cadastro'
})

conexao.connect((err)=>{
    if(!err){
        console.log("conexao bem sucedida");
    }
    else{
        console.log("erro: "+err);
    }    
})
//server.use(bodyparser.json);
server.engine('html',require('ejs').renderFile);
server.set('view engine', 'html');
server.use(express.static(path.join("C:/Users/facci/Imagens/home/projetos/crud/estilos")));
server.set('views',path.join("C:/Users/facci/Imagens/home/projetos/crud/view"));
server.get('/',function(req,res){
    
    res.render('index');
    
})

server.post('/',function(req,res){
    const values = [req.body.nome,req.body.Email,req.body.senha]
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES(?,?,?)';
    conexao.query(sql,values);
    res.render('index');
})

server.listen(PORT);