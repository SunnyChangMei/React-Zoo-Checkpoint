import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default function AnimalSelect({ animals, submitAnimal }) {
  return (
    <form>
      <select onChange={event => submitAnimal(event.target.value)}>
        <label htmlFor="select animal">Select an Animal: </label>
        {animals.map(animal => (
          <option key={animal}>{animal}</option>
        ))}
      </select>
    </form>
  );
}
