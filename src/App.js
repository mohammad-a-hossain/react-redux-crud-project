import React from 'react'
import {Provider} from 'react-redux'
import { DataTable } from './components/DataTable'
import { Navber } from './components/Navber'
import store from './redux/store';
import  './style/App.scss' 
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Navber/>
     <DataTable/>
    </div>  
      </Provider>
  );
}

export default App;
