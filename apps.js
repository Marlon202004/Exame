const express = require ("express");
const app = express ();
const port = 3000;

app.get('/mensagem', (req,res)=>{
    res.json({mensagem: "essa é minha APi REST em vs code"});
});

app.listen(port,()=>{
    console.log('Servidor rodando em http://localhost${port}');
});