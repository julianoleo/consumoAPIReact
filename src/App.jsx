import "./App.css";
import './tabela.css';

import React, { Component } from 'react';
import api from './api';
import Card from '../src/layout/Card'

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
      <div className="App">
        <div className="Cards">
          <Card titulo="Nomes mais utilizados no Brasil - 2010" color="#5F9EA0">
            <div className="tabela">
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
          </Card>
        </div>
      </div>
    );
  }
}
export default App;