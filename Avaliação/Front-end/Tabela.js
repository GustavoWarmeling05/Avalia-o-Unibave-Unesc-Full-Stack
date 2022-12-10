function Tabela({ lista, alterar, remover, selecionar }) {
    return (
        <table>
            <thead>
                <th>#</th>
                <th>Nome do filme</th>
                <th>Gênero</th>
                <th>Ano</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {
                    lista.map((objeto, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{objeto.nome}</td>
                            <td>{objeto.genero}</td>
                            <td>{objeto.ano}</td>
                            <td>
                                <button onClick={() => alterar(indice)} className="btn btn-warning" id="baixo">Alterar</button>
                                <button onClick={() => remover(indice, objeto.id)} className="btn btn-danger" id="maisbaixo">Excluir</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;