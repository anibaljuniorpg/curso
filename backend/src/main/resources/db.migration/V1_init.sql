CREATE TABLE aluno (
    id BIGINT PRIMARY KEY,
    nome VARCHAR(200),
    matricula varchar(100),
    telefone varchar(20),
    data_nascimento DATE
);

CREATE TABLE curso (
    id BIGINT PRIMARY KEY ,
    nome_curso VARCHAR(200),
    id_aluno BIGINT,
    CONSTRAINT fk_curso_aluno
    FOREIGN KEY (id_aluno)
    REFERENCES aluno(id)
);