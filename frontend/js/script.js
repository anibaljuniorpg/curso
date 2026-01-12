import { imprimirAlunos, incluirAluno as incluirAlunoAPI, deletarAluno } from "./alunoservice.js";

var alunos = [];
var alunoSelecionado = null;

// Atualiza tabela na tela
function atualizarTabela() {
    var tbody = document.querySelector('#tabelaAlunos tbody');
    tbody.innerHTML = '';

    for(var i=0;i<alunos.length;i++){
        var tr = document.createElement('tr');
        if(i === alunoSelecionado) tr.className = "selecionado";

        tr.innerHTML = "<td>"+alunos[i].id+"</td>"+
                       "<td>"+alunos[i].nome+"</td>"+
                       "<td>"+alunos[i].matricula+"</td>"+
                       "<td>"+alunos[i].telefone+"</td>"+
                       "<td>"+alunos[i].dataNascimento+"</td>";
        tbody.appendChild(tr);
    }
}

// Carrega alunos do backend
function carregarAlunos() {
    imprimirAlunos().then(function(lista){
        alunos = lista || [];
        alunoSelecionado = alunos.length ? 0 : null;
        atualizarTabela();
    }).catch(function(){
        alert("Erro ao carregar alunos");
    });
}

// Incluir aluno
function incluirAluno(){
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var telefone = document.getElementById('telefone').value;
    var dataNascimento = document.getElementById('dataNascimento').value;

    if(!nome || !matricula){
        alert("Nome e matrícula obrigatórios!");
        return;
    }

    var aluno = {nome:nome, matricula:matricula, telefone:telefone, dataNascimento:dataNascimento};

    incluirAlunoAPI(aluno).then(function(){
        alert("Aluno incluído");
        document.getElementById('nome').value = "";
        document.getElementById('matricula').value = "";
        document.getElementById('telefone').value = "";
        document.getElementById('dataNascimento').value = "";
        carregarAlunos();
    }).catch(function(){
        alert("Erro ao incluir aluno");
    });
}

// Deletar selecionado
function deletarAlunoSelecionado(){
    if(alunoSelecionado === null) return;
    var id = alunos[alunoSelecionado].id;
    deletarAluno(id).then(function(){
        alert("Aluno deletado");
        carregarAlunos();
    }).catch(function(){
        alert("Erro ao deletar aluno");
    });
}

// Navegação
function avancar(){
    if(alunoSelecionado < alunos.length-1) alunoSelecionado++;
    atualizarTabela();
}

function voltar(){
    if(alunoSelecionado>0) alunoSelecionado--;
    atualizarTabela();
}

function inicio(){
    if(alunos.length) alunoSelecionado = 0;
    atualizarTabela();
}

function fim(){
    if(alunos.length) alunoSelecionado = alunos.length-1;
    atualizarTabela();
}

// Imprimir
function imprimirLista(){
    imprimirAlunos().then(function(lista){
        if(!lista || lista.length==0) return;
        var html = "<table border='1' style='border-collapse:collapse;width:100%'>";
        html += "<tr><th>ID</th><th>Nome</th><th>Matrícula</th><th>Telefone</th><th>Data Nascimento</th></tr>";
        for(var i=0;i<lista.length;i++){
            html += "<tr><td>"+lista[i].id+"</td><td>"+lista[i].nome+"</td><td>"+lista[i].matricula+"</td><td>"+lista[i].telefone+"</td><td>"+lista[i].dataNascimento+"</td></tr>";
        }
        html += "</table>";
        var w = window.open('','_blank','width=800,height=600');
        w.document.write(html);
        w.print();
    }).catch(function(){
        alert("Erro ao imprimir");
    });
}

window.onload = function() {
    carregarAlunos();

    document.getElementById('btnIncluir').addEventListener('click', incluirAluno);
    document.getElementById('btnInicio').addEventListener('click', inicio);
    document.getElementById('btnVoltar').addEventListener('click', voltar);
    document.getElementById('btnAvancar').addEventListener('click', avancar);
    document.getElementById('btnFim').addEventListener('click', fim);
    document.getElementById('btnDeletar').addEventListener('click', deletarAlunoSelecionado);
    document.getElementById('btnImprimir').addEventListener('click', imprimirLista);
};
