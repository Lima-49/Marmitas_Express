import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router,
         Routes,
         Route,
         Link } from 'react-router-dom'
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders/Orders';

function App() {
  return (
      <Router>
        <div className="App">

          <Navbar />
      
          <Routes>
            <Route path='/' element={Home()} />
            <Route path='/pedidos' element={Orders()} />
            <Route path='/cadastro' element={Register()} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
