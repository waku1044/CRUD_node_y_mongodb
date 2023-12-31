import UsuarioIndividual from "./UsuarioIndividual.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
const ListaDeUsuarios = () => {
  const [datausers, setDatausers] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/usuario') // Replace '/api/users' with the correct API endpoint
  //     .then(response => {
  //       console.log(response.data)
  //       setDatausers(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching users:', error);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/usuario/obtenerusuarios")
      .then((response) => {
        setDatausers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [datausers]);

  return (
    <div className="container-fluid">
      <h1 className="text-center">Lista de Usuarios</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {datausers.map((user) => (
          <UsuarioIndividual
            key={user.idusuario}
            name={user.nombre}
            mail={user.email}
            phone={user.telefono}
            id={user._id}
            idusuario={user.idusuario}
          />
        ))}
      </div>
    </div>
  );
};
export default ListaDeUsuarios;
