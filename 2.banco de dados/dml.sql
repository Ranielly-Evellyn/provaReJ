USE  catalogoFilmesDBinfoC;

INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
    VALUES  ('admin', 'joaoadm@adm.com.br', '1234');

select id_usuario       id,
        nm_usuario      nome,
        ds_email        email
 from tb_usuario
 where ds_email         ='joaoadm@adm.com.br'  
 and ds_senha           = '1234';


 INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
 VALUES (1, 'Harry Potter', 'filme top', 9.5, '2010-10-05', true);

 UPDATE tb_filme
 SET nm_filme       = 'Harry Potter',
    ds_sinopse		= 'filme top',
    vl_avaliacao	= 9.5,
    dt_lancamento	= '2010-10-05',
    bt_disponivel   = true
WHERE id_filme  =1;

DELETE FROM  tb_filme
        WHERE id_filme = 1;


SELECT  id_filme            id,
        nm_filme            nome,
        vl_avaliacao        avaliacao,
        dt_lancamento       lancamento,
        bt_disponivel       disponivel
FROM tb_filme;

SELECT id_filme         id,
        nm_filme            nome,
        vl_avaliacao        avaliacao,
        dt_lancamento       lancamento,
        bt_disponivel       disponivel
FROM tb_filme;
WHERE nm_filme              like '%a%';


SELECT id_filme         id,
        nm_filme            nome,
        vl_avaliacao        avaliacao,
        dt_lancamento       lancamento,
        bt_disponivel       disponivel
FROM tb_filme;
WHERE id_filme      = 1;









