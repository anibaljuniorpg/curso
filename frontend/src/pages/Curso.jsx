import { useEffect, useState } from "react";
import { imprimirCursos } from "../service/AlunoService";
import TabelaCursos from "../components/TabelaCurso";
import '../App.css';

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
  imprimirCursos()
    .then(dados => setCursos(dados))
    .catch(err => console.error(err));
}, []);

  return (
    <div>
      <h2>Cursos</h2>
      <TabelaCursos cursos={cursos} />
      <button onClick={() => window.history.back()}>Voltar para tabela aluno</button>
    </div>
  );
}
