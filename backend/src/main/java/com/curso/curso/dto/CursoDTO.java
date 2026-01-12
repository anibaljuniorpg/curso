package com.curso.curso.dto;

import com.curso.curso.entity.Curso;

public record CursoDTO(Long id, String nomeCurso, Long idAluno) {
    public CursoDTO(Curso curso) {
        this (
                curso.getId(),
                curso.getNomeCurso(),
                curso.getAluno().getId()
        );
    }
}
