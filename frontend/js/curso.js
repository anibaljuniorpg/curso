const btnVerCursos = document.getElementById("btnVerCursos");

btnVerCursos.addEventListener("click", async () => {
  if (alunoSelecionado === null) return alert("Selecione um aluno!");

  const idAluno = alunos[alunoSelecionado].id;

  try {
    
    const cursos = await response.json(); // retorna lista de CursoDTO

    // Filtra cursos do aluno selecionado
    const cursosDoAluno = cursos.filter(curso => curso.idAluno === idAluno);

    atualizarTabelaCursos(cursosDoAluno);

  } catch (err) {
    console.error("Erro ao carregar cursos:", err);
    alert("Erro ao carregar cursos");
  }
});

function atualizarTabelaCursos(cursos) {
  const tbody = document.querySelector("#tabelaCursos tbody");
  tbody.innerHTML = ''; // limpa tabela

  cursos.forEach(curso => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${curso.id}</td>
      <td>${curso.nomeCurso}</td>
    `;
    tbody.appendChild(tr);
  });
}
