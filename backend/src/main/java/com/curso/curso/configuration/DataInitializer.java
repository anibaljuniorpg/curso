package com.curso.curso.configuration;

import com.curso.curso.dto.AlunoRequestDTO;
import com.curso.curso.entity.Aluno;
import com.curso.curso.entity.Curso;
import com.curso.curso.repository.AlunoRepository;
import com.curso.curso.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Profile("dev")
@Component
public class DataInitializer implements ApplicationRunner {
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private CursoRepository cursoRepository;

    public DataInitializer(AlunoRepository alunoRepository, CursoRepository cursoRepository) {
        this.alunoRepository = alunoRepository;
        this.cursoRepository = cursoRepository;
    }

    @Override
    public void run(ApplicationArguments args) {


        // Criar alunos
        Aluno aluno1 = new Aluno(
                new AlunoRequestDTO("Jose", "MAT001", "119999999", LocalDate.of(2000, 1, 10))
        );
        Aluno aluno2 = new Aluno(
                new AlunoRequestDTO("Anibal", "MAT002", "118888888", LocalDate.of(1999, 5, 20))
        );
        Aluno aluno3 = new Aluno(
                new AlunoRequestDTO("Junior", "MAT003", "117777777", LocalDate.of(2001, 3, 15))
        );

        alunoRepository.saveAll(List.of(aluno1, aluno2, aluno3));

        // Criar cursos e associar alunos
        Curso curso1 = new Curso();
        curso1.setNomeCurso("Java");
        curso1.setAluno(aluno1);

        Curso curso2 = new Curso();
        curso2.setNomeCurso("Spring Boot");
        curso2.setAluno(aluno2);

        Curso curso3 = new Curso();
        curso3.setNomeCurso("Banco de Dados");
        curso3.setAluno(aluno3);

        cursoRepository.saveAll(List.of(curso1, curso2, curso3));
    }
}

