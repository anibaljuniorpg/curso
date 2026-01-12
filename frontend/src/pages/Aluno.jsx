import React, { useState, useEffect } from 'react';
import { imprimirAlunos, incluirAluno as incluirAlunoAPI, deletarAluno } from '../service/AlunoService.js';
import TabelaAlunos from '../components/TabelaAlunos.jsx';
import FormularioAluno from '../components/FormularioAluno.jsx';
import '../App.css';
import { useNavigate } from 'react-router-dom';


export default function Alunos() {
    const navigate = useNavigate();

    const [alunos, setAlunos] = useState([]);
    const [selecionado, setSelecionado] = useState(null);

    useEffect(() => {
        carregarAlunos();
    }, []);

    const carregarAlunos = () => {
        imprimirAlunos()
        .then(lista => {
            setAlunos(lista || []);
            setSelecionado(lista && lista.length ? 0 : null);
        })
        .catch(() => alert("Erro ao carregar alunos"));
    };

    const incluirAluno = (aluno) => {
        incluirAlunoAPI(aluno)
        .then(() => {
            alert("Aluno incluído!");
            carregarAlunos();
        })
        .catch(() => alert("Erro ao incluir aluno"));
    };

    const deletarAlunoSelecionado = () => {
        if (selecionado === null) return;
        const id = alunos[selecionado].id;
        deletarAluno(id)
        .then(() => carregarAlunos())
        .catch(() => alert("Erro ao deletar aluno"));
    };

    const avancar = () => {
        if (selecionado < alunos.length - 1) setSelecionado(selecionado + 1);
    };

    const voltar = () => {
        if (selecionado > 0) setSelecionado(selecionado - 1);
    };

    const inicio = () => setSelecionado(alunos.length ? 0 : null);
    const fim = () => setSelecionado(alunos.length ? alunos.length - 1 : null);

    const imprimirLista = () => {
        let html = "<table border='1' style='border-collapse:collapse;width:100%'>";
        html += "<tr><th>ID</th><th>Nome</th><th>Matrícula</th><th>Telefone</th><th>Data Nascimento</th></tr>";
        alunos.forEach(a => {
        html += `<tr>
            <td>${a.id}</td>
            <td>${a.nome}</td>
            <td>${a.matricula}</td>
            <td>${a.telefone}</td>
            <td>${a.dataNascimento}</td>
        </tr>`;
        });
        html += "</table>";
        const w = window.open('', '_blank', 'width=800,height=600');
        w.document.write(html);
        w.print();
    };

    return (
        <div className="form">
        <h2>Formulário de Alunos</h2>

        <div className="alunos-form">
            <TabelaAlunos
            alunos={alunos}
            selecionado={selecionado}
            setSelecionado={setSelecionado}
            />
            <FormularioAluno incluirAluno={incluirAluno} />
        </div>

        <div className="botoes">
            <button onClick={inicio}>Início</button>
            <button onClick={voltar}>Voltar</button>
            <button onClick={avancar}>Avançar</button>
            <button onClick={fim}>Fim</button>
            <button onClick={deletarAlunoSelecionado}>Deletar</button>
            <button onClick={imprimirLista}>Imprimir</button>
            <button onClick={() => navigate('/Curso')}>
  Ir para o formulario curso
</button>

        </div>
        </div>
    );
}
