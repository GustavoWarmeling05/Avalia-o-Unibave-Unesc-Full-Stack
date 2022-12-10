package com.projetoavaliacao.cinema.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.projetoavaliacao.cinema.entitites.Filme;

public interface FilmeRepository extends JpaRepository <Filme, Long> {
    
}
