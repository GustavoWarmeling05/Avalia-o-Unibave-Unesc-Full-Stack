function Formulario({ eventoInsere, cadastrar, cancelar, objeto, cadastroValido }) {
    return (

        <form>
            <input type="text" value={objeto.nome} onChange={eventoInsere} name="nome" placeholder="Nome" className="form-control" id="idnome" />
            <input type="text" value={objeto.genero} onChange={eventoInsere} name="genero" placeholder="Genero" className="form-control" id="idgenero" />
            <input type="text" value={objeto.ano} onChange={eventoInsere} name="ano" placeholder="ano" className="form-control" id="idano" />

            <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" id="salva" />
            <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary" />

        </form>

    )
}


export default Formulario;