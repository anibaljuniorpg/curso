package com.curso.curso.service;

import com.curso.curso.dto.CursoDTO;
import com.curso.curso.entity.Curso;
import com.curso.curso.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {
    @Autowired
    private CursoRepository repository;

    public List<CursoDTO> listAllCurso(){
        List<Curso> cursos  = repository.findAll();
        return cursos.stream().map(curso -> new CursoDTO(curso)).toList();
    }

}
