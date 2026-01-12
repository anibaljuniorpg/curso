package com.curso.curso.dto;

import com.curso.curso.entity.Aluno;

import java.time.LocalDate;
import java.util.List;

public record AlunoResponseDTO(Long id, String nome, String matricula, String telefone, LocalDate dataNascimento) {
    public AlunoResponseDTO (Aluno aluno){
        this(
                aluno.getId(),
                aluno.getNome(),
                aluno.getMatricula(),
                aluno.getTelefone(),
                aluno.getDataNascimento()
        );
    }


}
