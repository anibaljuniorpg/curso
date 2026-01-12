package com.curso.curso.service;

import com.curso.curso.dto.AlunoRequestDTO;
import com.curso.curso.dto.AlunoResponseDTO;
import com.curso.curso.entity.Aluno;
import com.curso.curso.repository.AlunoRepository;
import org.aspectj.weaver.Lint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository repository;

    public AlunoResponseDTO createAluno(AlunoRequestDTO requestDTO){
        Aluno aluno = new Aluno(requestDTO);
        return new AlunoResponseDTO(repository.save(aluno));
    }

    public void deletar(Long id){
        repository.deleteById(id);
    }

    public List<AlunoResponseDTO> getAllAluno(){
        List<Aluno> alunos = repository.findAll();
        return alunos.stream().map(aluno -> new AlunoResponseDTO(aluno)).toList();
    }
}
