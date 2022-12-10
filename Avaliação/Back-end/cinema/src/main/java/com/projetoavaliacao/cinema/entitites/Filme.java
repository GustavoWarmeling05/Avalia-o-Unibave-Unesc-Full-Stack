package com.projetoavaliacao.cinema.entitites;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tbl_filmes")
@Getter
@Setter
public class Filme {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Nome obrigatorio")
    private String nome;
    @NotBlank(message = "Genero obrigatorio")
    private String genero;
    @NotBlank(message = "Ano obrigatorio")
    private String ano;

}
