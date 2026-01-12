package com.curso.curso.entity;

import com.curso.curso.dto.AlunoRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "aluno")
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String matricula;
    private String telefone;
    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    public Aluno(AlunoRequestDTO requestDTO) {
        this.nome = requestDTO.nome();
        this.matricula = requestDTO.matricula();
        this.telefone = requestDTO.telefone();
        this.dataNascimento = requestDTO.dataNascimento();
    }
}
