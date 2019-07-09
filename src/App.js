import React,{Component} from 'react';
import B from './components/B';
import C from './components/C'
import './App.css';

class App extends Component {
  render(){
    return (
    <div className="App">
      <B/>
      <C/>
    </div>
  );
  }
}

export default App;
