

export default function TabelaAlunos({ alunos, selecionado, setSelecionado }) {
  return (
    <table id="tabelaAlunos">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Matrícula</th>
          <th>Telefone</th>
          <th>Data Nascimento</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((a, i) => (
          <tr
            key={a.id}
            className={selecionado === i ? "selecionado" : ""}
            onClick={() => setSelecionado(i)}
          >
            <td>{a.id}</td>
            <td>{a.nome}</td>
            <td>{a.matricula}</td>
            <td>{a.telefone}</td>
            <td>{a.dataNascimento}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
