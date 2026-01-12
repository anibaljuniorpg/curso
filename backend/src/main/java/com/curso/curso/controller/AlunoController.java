package com.curso.curso.controller;

import com.curso.curso.dto.AlunoRequestDTO;
import com.curso.curso.dto.AlunoResponseDTO;
import com.curso.curso.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @PostMapping("/cadastrar")
    public ResponseEntity<AlunoResponseDTO> createAluno(@RequestBody AlunoRequestDTO body){
        return ResponseEntity.ok(alunoService.createAluno(body));
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        alunoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/lista")
    public ResponseEntity<List<AlunoResponseDTO>> listAllAlunos(){
        return ResponseEntity.ok(alunoService.getAllAluno());
    }
}
