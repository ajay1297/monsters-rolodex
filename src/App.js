import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      this.setState({monsters:data});
    })
  }

  render() {
    const {monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Enter Monsters' handleChange = {e => this.setState({searchField:e.target.value})}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
