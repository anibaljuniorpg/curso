package com.curso.curso.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "curso")
@NoArgsConstructor
@AllArgsConstructor
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nome_curso")
    private String nomeCurso;
    @ManyToOne
    @JoinColumn(name = "id_aluno")
    private Aluno aluno;
}
