import './App.css';
import { useState, version } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Home/Header.js'
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router,
         Routes,
         Route,
         Link } from 'react-router-dom'
import Home from './components/Home/Home';
import { Register } from './components/Register/Register';
import Menu from './components/Menu/Menu';
import { ClientContext } from './ClientContext';

function App() {
  const [ clientName, setClientName ] = useState('')
  const [ clientPhone, setClientPhone ] = useState('')
  const [ clientAddress, setClientAddress ] = useState('')
  
  return (
      <Router>
        <div className="App">
          <Header/>
          <Navbar />

          <ClientContext.Provider value={{clientName, setClientName,
                                          clientPhone, setClientPhone,
                                          clientAddress, setClientAddress}}>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cardapio' element={<Menu />}/>
                <Route path='/cadastro' element={<Register />}/>
              </Routes>
          </ClientContext.Provider>
        </div>
      </Router>
  );
}

export default App;
