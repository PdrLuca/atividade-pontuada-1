import React, { useState } from 'react';
import './style.css';

function InfoJogador() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');

    const [listaJogadores, setListaJogadores] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();
        setListaJogadores([...listaJogadores, { nome, numero }]);
        setNome('');
        setNumero('');
    }
    return (
        <div className="info-jogador">
            <h2>Jogadores do EC Bahia</h2>
            <form onSubmit={adicionarJogador}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Número:</label>
          <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} required />
        </div>
        <button type="submit">Adicionar Jogador</button>
        </form>
       
        <hr />
        <h3>Lista de Jogadores</h3>
        <ul>
          {listaJogadores.map((jogador, index) => (
            <li key={index}>{jogador.nome} - {jogador.numero}</li>
          ))}
        </ul>
        </div>

    );
}

export default InfoJogador;
