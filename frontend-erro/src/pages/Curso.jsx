import { useEffect, useState } from "react";
import { imprimirCursos } from "../service/AlunoService";
import TabelaCursos from "../components/TabelaCurso";

export default function Cursos({ idAluno }) {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    if (!idAluno) return;

    imprimirCursos(idAluno)
      .then(dados => setCursos(dados))
      .catch(err => console.error(err));
  }, [idAluno]);

  return (
    <div>
      <h2>Cursos</h2>
      <TabelaCursos cursos={cursos} />
    </div>
  );
}
