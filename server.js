const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//Endpoint para soma 
app.post('/soma',(req,res)=> {
    const { numero1,numero2 } = req.body;

    //Verificar numeros presentes
    if(typeof numero1 !== 'number' || typeof numero2 !== 'number'){
        return res.status(400).json({error: 'Os atributos "numero1" e "numero2" devem ser numeros.'});
    }

    //Fazer soma
    const resultado = numero1 + numero2;

    //Retorna o JSON com os números e o resultado
    return res.json({
        numero1,
        numero2,
        resultado
    });   
});

//Inicia o servidor 
app.listen(port,()=>{
    console.log('Servidor rodando em https://localhost:${port}');
})