CREATE DATABASE catalogoFilmesDB;
USE catalagoFilmesDB;

CREATE TABLE tb_usuario (
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar (200),
    ds_email		varchar(200),
    ds_senha		varchar (200)
);

CREATE TABLE tb_filme (
	id_filme		int primary key auto_increment,
    nm_usuario		int,
    nm_filme		varchar(200),
    ds_sinopse		varchar(2000),
    vl_avaliacao	decimal (15,2),
    dt_lancamento	date,
    bt_disponivel	boolean,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario)
);