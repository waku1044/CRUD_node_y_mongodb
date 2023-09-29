import axios from "axios";
import {Link} from "react-router-dom";

const UsuarioIndividual = ({ name, mail, phone, id, }) => {

  // Este codigo tambien anad para eliminar el usuario solo que usa fetch
  // const eliminarUsuario = (id) => {
  //   // Aquí puedes realizar la lógica para eliminar el usuario con el ID proporcionado
  //   fetch(`http://localhost:5000/api/usuario/eliminarusuario/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  // };

  const eliminarUsuario = (id) => {
    axios.delete(`http://localhost:5000/api/usuario/eliminarusuario/${id}`)
      .then(response => {
        // Aquí puedes manejar la respuesta de la API después de eliminar el usuario
        console.log('El usuario ha sido eliminado');
      })
      .catch(error => {
        // Aquí puedes manejar cualquier error que ocurra durante la solicitud DELETE
        console.error('Ocurrio un error ', error);
      });
  };
  

    return (
      <div className="border border-success p-3 text-center bg-warning" id={id} style={{ width: "18rem" }}>
        <h2>{name.toUpperCase()}</h2>
        <p><b>Correo electrónico: </b><i>{mail}</i></p>
        <p><b>Teléfono: </b><i>{phone}</i></p>
        <div className="botones">
          <Link className="btn btn-primary me-3" to={`editarusuario/${id}`}><li className="list-group-item">Editar</li></Link>
          <button className="btn btn-danger" onClick={() => eliminarUsuario(id)}>Eliminar</button>
        </div>
      </div>
    );
  };

  export default UsuarioIndividual;