export default function TabelaCursos({ cursos, selecionado, setSelecionado }) {
  return (
    <table id="tabelaCursos">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Curso</th>
          <th>ID do Aluno</th>
        </tr>
      </thead>

      <tbody>
        {cursos.map((c, i) => (
          <tr
            key={c.id}
            className={selecionado === i ? "selecionado" : ""}
            onClick={() => setSelecionado(i)}
          >
            <td>{c.id}</td>
            <td>{c.nomeCurso}</td>
            <td>{c.idAluno}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
