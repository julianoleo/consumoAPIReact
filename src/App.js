import './tabela.css';
import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    nomes: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({ nomes: response.data });
  }

  render() {

    const { nomes } = this.state;

    return (
      <div className="tabela">
      <h1>Nomes mais utilizados no Brasil - 2010 </h1>
        <table>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Qtde Utilizações</th>
            </tr>
          </thead>
          <tbody>
            {nomes.map(nome => (nome.res.map(nom => (
              <tr key={nom.res} className={nom.ranking % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{nom.ranking}</td>
                <td>{nom.nome}</td>
                <td>{nom.frequencia}</td>
              </tr>
            ))))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;