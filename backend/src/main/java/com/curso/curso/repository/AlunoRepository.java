package com.curso.curso.repository;

import com.curso.curso.entity.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Long, Aluno> {
}
