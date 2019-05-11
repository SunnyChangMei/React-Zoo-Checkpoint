// import { setMammal, setBird, setFish } from '../store';

const initialState = {
  selectedMammal: 'Tiger',
  selectedBird: 'Eagle',
  selectedFish: 'Seahorse',
  mammals: ['Tiger', 'Panda', 'Pig'],
  birds: ['Eagle', 'Flamingo', 'Penguin'],
  fish: ['Seahorse', 'Octopus', 'Stingray']
};

// make sure you understand the parameters here!
// with any reducer we expect 2 arguments
// we are able to give a default value to a parameter in the way seen below
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAMMAL':
      return { ...state, selectedMammal: action.animal };
    case 'SET_BIRD':
      return { ...state, selectedBird: action.animal };
    case 'SET_FISH':
      return { ...state, selectedFish: action.animal };
    default:
      return state;
  }
};
