
import './App.css'
import { Grid } from '@material-ui/core'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './assets/estaticos/footer/footer';
import Navbar from './assets/estaticos/navbar/navbar';
import Login from './paginas/login/login';
import Home from './paginas/home/home';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '60vh' }}>
    <Routes> // Antigo Switch
      
  <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    {/*<Route path="/cadastro" element={<CadastroUsuario />} />*/}
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;