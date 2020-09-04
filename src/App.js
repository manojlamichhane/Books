import React from 'react';
import Appbar from './components/Appbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Addbook from './components/Addbook';
import {Provider} from 'react-redux'
import {store} from './components/Redux/store'
import Editbook from './components/Editbook'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Appbar/>
        <Switch>
          <Route path = "/" exact component ={Home}/>
          <Route path = "/add" exact component ={Addbook}/>
          <Route path = "/edit/:editId" exact component ={Editbook}/>        
        </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;