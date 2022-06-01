import { alterarFilme, alterarImagem, inserirFilme, listarTodosFilmes, } from "../repository/filmeRepository.js";
import multer from 'multer' 

const upload = multer ({dest:'storage/capaFilmes'})


import { Router } from "express";
import { con } from "../repository/connection.js";
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

server.put('/filme/:id/imagem', upload.single('capa'), async (req, resp) => {
    try{
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem (imagem, id);
        if(resposta!= 1 )
            throw new Error ('A imagem não pode ser salva');
        resp.status(204).send();

    }catch(err){
        resp.status(400).send({
            erro: err.message

        })
    }   
})


server.get('/filme', async (req, resp) => {
    try {
        const resposta = await listarTodosFilmes();
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }
})


server.get('/filme/:id', async (req, resp) => {
    try {
        const {id} = req.params;

        const resposta = await buscarPorId(id);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }
})

server.delete('/filme/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const resposta = await removerFilmes(id);
        if(resposta != 1)
        throw new Error('Filme não pode ser removido');

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }
})



server.post('/filme/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const filme = req.body;

        if(!filme.nome)
        throw new Error('Nome do filme é obrigatório!');

        if(!filme.sinopse)
        throw new Error('Sinopse do filme é obrigatório!');

        if(!filme.avaliacao)
        throw new Error('Avalaliacao do filme é obrigatório!');

        if(filme.lancamento == undefined || filme.avaliacao < 0)
        throw new Error('Lancamento do filme é obrigatório!');

        if(filme.disponivel == undefined)
        throw new Error('Campo Disponivel é obrigatório!');

        if(!filme.usuario)
        throw new Error('Usuario do filme é obrigatório!');
       
        const resposta = await alterarFilme(id, filme);

        if (resposta != 1)
        throw new Error('Filme não pode ser alterado');

        
        const filmeInserido = await inserirFilme(filme);
        resp.send(filmeInserido);
        
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;