package com.curso.curso.dto;

import java.time.LocalDate;

public record AlunoRequestDTO(String nome, String matricula, String telefone, LocalDate dataNascimento) {
}
