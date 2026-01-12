import React, { useState } from 'react';

export default function FormularioAluno({ incluirAluno }) {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !matricula) {
      alert("Nome e matrícula obrigatórios!");
      return;
    }
    incluirAluno({ nome, matricula, telefone, dataNascimento });
    setNome(''); setMatricula(''); setTelefone(''); setDataNascimento('');
  };

  return (
    <form className="formulario-aluno" onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <label>Matrícula:</label>
      <input value={matricula} onChange={e => setMatricula(e.target.value)} placeholder="Matrícula" />
      <label>Telefone:</label>
      <input value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Telefone" />
      <label>Data Nascimento:</label>
      <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
      <button className='btnIncluir' type="submit">Incluir</button>
    </form>
  );
}
