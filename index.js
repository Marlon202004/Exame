const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//Verifica se o texto foi enviado e de é uma string
if(typeof texto !== 'string'){
    return resizeBy.status(400).json({error:'O atributo "texto" deve ser uma strig.'});

//Inverte o texto
const textoInvertido = texto.slipt('').reverse().join('');

//Retorna o JSON com o texto invertido
return resizeBy.json({
    texto_invertido: textoInvertido
});

};

//Inicia o Servidor 
app.listen(port,()=>{
    console.log('Servidor rodando em https://localhost:${port}');
});