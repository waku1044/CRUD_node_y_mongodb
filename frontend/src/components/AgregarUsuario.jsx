import {useState} from 'react';
import iniquid from 'uniqid'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AgregarUsuario = () => {

  const navegate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleData = (e)=>{
    e.preventDefault();
    var user = {
      nombre:nombre,
      email:email,
      telefono:telefono,
      idusuario: iniquid()
    }
    console.log(user);

    axios.post('http://localhost:5000/api/usuario/agregarusuario', user)
    .then(res => {
      alert(res.data)
    })
    .catch(err =>{
      console.error(err)
    })
    setNombre('')
    setEmail('')
    setTelefono('')
    navegate('/')
    
}
  return (
    <>
      <div className='w-75 mx-auto mt-4'>
      <form className="bg-secondary py-5 border border-3 mx-auto rounded d-flex flex-column align-items-center" action='POST' onSubmit={handleData}>
        <h2 className="mt-4 text-center">Crear nuevo Usuario</h2>
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input type="text" className="w-75 mb-3" value={nombre} onChange={(e)=>setNombre(e.target.value)} />

        <label htmlFor="email" className="form-label ">
          Email
        </label>
        <input type="text" className="w-75 mb-3" value={email} onChange={(e)=>setEmail(e.target.value)}   />

        <label htmlFor="telefono" className="form-label">
          Telefono
        </label>
        <input type="text" className="w-75 mb-3"  value={telefono} onChange={(e)=>setTelefono(e.target.value)} />

        <input type='submit' className="btn btn-success w-50 mt-4"  value='Agregar' />
      </form>
      </div>
    </>
  );
};

export default AgregarUsuario;
