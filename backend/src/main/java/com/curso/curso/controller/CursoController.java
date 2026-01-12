package com.curso.curso.controller;

import com.curso.curso.dto.CursoDTO;
import com.curso.curso.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/api/curso")
public class CursoController {
    @Autowired
    private CursoService cursoService;
    @GetMapping
    public ResponseEntity<List<CursoDTO>> listAllCurso(){
        return ResponseEntity.ok(cursoService.listAllCurso());
    }
}
