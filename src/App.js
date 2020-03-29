import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchedText:''
    }
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchedText : e.target.value});
  }

  render(){
    const {monsters, searchedText} = this.state;
    const filtered = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchedText.toLowerCase())  
    );

    return (      
      <div className="App">
        <h1> Monster Rolodex</h1>
        <SearchBox placeholder="Search for monsters"
        handleChange={ this.handleChange }></SearchBox>
        <CardList monsters={filtered} />       
      </div>
    );
  }
}

export default App;
