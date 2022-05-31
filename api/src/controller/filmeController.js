import { inserirFilme } from "../repository/filmeRepository.js";

import { Router } from "express";
const server = Router ();

server.post('/filme', async (req, resp) => {
    try {
        const novoFilme = req.body;

        if(!novoFilme.nome)
        throw new Error('Nome do filme é obrigatório!');

        if(!novoFilme.sinopse)
        throw new Error('Sinopse do filme é obrigatório!');

        if(!novoFilme.avaliacao)
        throw new Error('Avalaliacao do filme é obrigatório!');

        if(!novoFilme.lancamento)
        throw new Error('Lancamento do filme é obrigatório!');

        if(!novoFilme.disponivel)
        throw new Error('Campo Disponivel é obrigatório!');

        if(!novoFilme.usuario)
        throw new Error('Usuario do filme é obrigatório!');

        const filmeInserido = await inserirFilme(novoFilme);

        resp.send(filmeInserido);
    } catch (err){
        resp.status(400).send({
            err: err.message
        })
    }
})

export default server;