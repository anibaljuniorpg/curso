import { Routes, Route } from 'react-router-dom';
import Aluno from './pages/Aluno';
import Curso from './pages/Curso';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Aluno />} />
      <Route path="/Curso" element={<Curso />} />
    </Routes>
  );
}
