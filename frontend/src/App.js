import React from 'react'
import './App.css';
// import { ToastContainer } from 'react-toastify'
import Navbar1 from '../src/components/Navbar1'
import Home from '../src/components/Home'
import AddContact from '../src/components/AddContact'
import EditContact from '../src/components/EditContact'

import { Route, Switch } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar1 />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/add' component={AddContact} />
          <Route path="/edit/:id" component={EditContact} />

        </Switch>
      </header>
    </div>
  );
}

export default App;
