package com.projetoavaliacao.cinema.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.projetoavaliacao.cinema.entitites.Filme;

public interface FilmeRepository extends JpaRepository <Filme, Long> {

    List<Filme> findByNameIgnoreCase(String name);
}
