import express from "express";
import cors from 'cors';



const PORT = 5050;

const servidor = express();

servidor.use(express.json());
servidor.use(cors());
let ultimaMensagem = { mensagem: "Nenhuma mensagem recebida ainda" };

servidor.post('/mensagem/', (req, resp) => {
    let mensagem = req.body;
    if (mensagem) {
        ultimaMensagem = mensagem;  // Armazena a última mensagem recebida
        console.log(mensagem);
        resp.status(200).send('');
    } else {
        resp.status(400).send('Erro ao receber a mensagem');
    }
});

servidor.get('/mensagem/', (req, resp) => {
    if (ultimaMensagem) {
        resp.json(ultimaMensagem);  // Envia a última mensagem recebida
    } else {
        resp.status(400).send('Nenhuma mensagem disponível');
    }
});

servidor.listen(PORT, () => {
    console.log('Servidor aberto em http://localhost:' + PORT);
});
