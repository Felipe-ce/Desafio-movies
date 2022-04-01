import React from 'react';

// Atividade  para usar o filter no projeto de filmes

export default class App extends React.Component {
  state = {
    listaFrutas: [
      'Banana',
      'Abacaxi',
      'Amora',
      'Ameixa',
      'Manga',
      'Melão',
      'Limão',
      'Laranja',
    ],
    frutas: [],
  };

  // Função para filtrar
  filtrar = (e) => {
    let { listaFrutas } = this.state;

    const frutraFriltada = listaFrutas.filter((item) => {
      if (item.includes.toLowerCase()(e.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      frutas: frutraFriltada,
    });
  };

  render() {
    return (
      <div>
        <h1>Lista de frutas</h1>
        <input
          type="text"
          placeholder="Procure uma fruta"
          onChange={this.filtrar}
        />
        <ul>
          {this.state.frutas.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
