import React from 'react';
import Counter from './Component/Counter';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <Counter/>
      </Provider>
      
    </div>
  );
}

export default App;
