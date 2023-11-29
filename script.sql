//consultando dados relacionando perguntas e respostas.
select
	p.titulo,
	p.descricao,
	r.resposta
from tb_pergunta p
left join tb_resposta r
on p.id_pergunta = r.id_pergunta;