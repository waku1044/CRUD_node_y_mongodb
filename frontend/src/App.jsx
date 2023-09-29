import NavBar from './components/NavBar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AgregarUsuario from "./components/AgregarUsuario.jsx";
import ListaDeUsuarios from "./components/ListaDeUsuarios.jsx";
import EditarUsuario from "./components/EditarUsuario.jsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ListaDeUsuarios/>} exact></Route>
        <Route path='/agregarusuario' element={<AgregarUsuario/>} exact></Route>
        <Route path='/editarusuario/:id' element={<EditarUsuario/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
