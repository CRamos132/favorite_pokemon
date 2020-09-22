import React from 'react';

import { Provider } from 'react-redux'

import storeSaved from './stores/storeSaved'
import DisplayPokemons from './components/DisplayPokemons';

function App() {
  return (
    <Provider store={storeSaved}>
      <DisplayPokemons />
    </Provider>
  );
}

export default App;
