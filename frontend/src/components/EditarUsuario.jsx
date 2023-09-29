// import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditarUsuario = () => {
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [telefono, setTelefono] = useState('');
const { id } = useParams();
const navegate = useNavigate();



useEffect(() => {
  obtenerUsuarioPorId(id)
}, [id]);
  const obtenerUsuarioPorId = (id) => {
    axios.get(`http://localhost:5000/api/usuario/obtenerusuario/${id}`)
    .then((res) => {
      setNombre(res.data.nombre);
      setEmail(res.data.email);
      setTelefono(res.data.telefono);
      
    })
   
  };

const editadorUsuario = (e) => {
  e.preventDefault();
  const usuario = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    idusuario: id
  }
  axios.put(`http://localhost:5000/api/usuario/actualizarusuario/${id}`, usuario)
  .then(res => {
    alert(res.data)
  })
  .catch(err => {
    console.error(err)
  })
  navegate('/')
}

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form className="bg-secondary py-5 w-75 mx-auto rounded d-flex flex-column align-items-center" action='POST' onSubmit={editadorUsuario}>
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input type="text" className="w-75 mb-3" value={nombre} onChange={(e) => setNombre(e.target.value)}  />

        <label htmlFor="email" className="form-label ">
          Email
        </label>
        <input type="text" className="w-75 mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="telefono" className="form-label">
          Telefono
        </label>
        <input type="text" className="w-75 mb-3" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

        <button className="btn btn-success w-25 mt-4 " type='submit'>Agregar Usuario</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
