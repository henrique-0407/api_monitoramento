import express from "express";
import cors from 'cors';

const PORT = 5000;

const servidor = express();

servidor.use(express.json());
servidor.use(cors());
let ultimaMensagem = { mensagem: "Nenhuma mensagem recebida ainda" };


servidor.post('/temp/', (req, resp) => {
    let mensagem = req.body;
    if (mensagem) {
        ultimaMensagem = mensagem;  
        console.log(mensagem);
        resp.status(200).send('');
    } else {
        resp.status(400).send('Erro ao receber a mensagem');
    }
});

servidor.get('/temp/', (req, resp) => {
    if (ultimaMensagem) {
        resp.json(ultimaMensagem);  
    } else {
        resp.status(400).send('Nenhuma mensagem disponível');
    }
});

servidor.listen(PORT, () => {
    console.log('Servidor aberto em http://localhost:' + PORT);
});
