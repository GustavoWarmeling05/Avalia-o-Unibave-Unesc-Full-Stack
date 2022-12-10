package com.projetoavaliacao.cinema.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.projetoavaliacao.cinema.entitites.Filme;
import com.projetoavaliacao.cinema.repository.FilmeRepository;

@Service
public class FilmeService {
    
    @Autowired
    private FilmeRepository repository;

    public List<Filme> listarFilme() {
        return repository.findAll();
    }

    public Filme criarFilme(Filme filme) {
        Filme filmeNovo = repository.save(filme);
        return filmeNovo;
    }

    public Filme editarFilme(Filme filme) {
        Filme filmeGravado = repository.save(filme);
        return filmeGravado;
    }

    public Boolean excluirFilme(Long id) {
        repository.deleteById(id);
        return true;
    }

    public List<Filme> findByNameIgnoreCase(String name) {
        return repository.findByNameIgnoreCase(name);
    }

}
