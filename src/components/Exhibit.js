import React, { Component } from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';

//<Exhibit animals={animals} selectedAnimal={selectedAnimal}/>

export default class Exhibit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnimal: props.selectedAnimal
    };
    this.setAnimal = this.setAnimal.bind(this);
  }

  setAnimal(newAnimal) {
    this.setState({ selectedAnimal: newAnimal });
  }

  render() {
    return (
      <div className="exhibit">
        <AnimalSelect
          animals={this.props.animals}
          submitAnimal={this.setAnimal}
        />
        <Cage selectedAnimal={this.props.selectedAnimal} />
      </div>
    );
  }
}
