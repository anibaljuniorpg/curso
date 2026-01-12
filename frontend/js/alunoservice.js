import { fetchApi } from "./api";

// DELETE
export function deletarAluno(id) {
  return fetchApi(`api/deletar/${id}`, {
    method: "DELETE"
  });
}

// POST
export function incluirAluno(aluno) {
  const jsonAluno = {
    nome: aluno.nome,
    matricula: aluno.matricula,
    telefone: aluno.telefone,
    dataNascimento: aluno.dataNascimento
  };

  return fetchApi("api/cadastrar", {
    method: "POST",
    body: JSON.stringify(jsonAluno)
  });
}

// GET
export function imprimirAlunos() {
  return fetchApi("api/lista", {
    method: "GET"
  });
}

// GET Curso
export function imprimirCursos() {
  return fetchApi("api/curso", {
    method: "GET"
  });
}