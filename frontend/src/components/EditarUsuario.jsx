const EditarUsuario = () => {
  return (
    <div>
      <h2>Editar Usuario</h2>
      <form className="bg-secondary py-5 w-75 mx-auto rounded d-flex flex-column align-items-center">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input type="text" className="w-75 mb-3" />

        <label htmlFor="email" className="form-label ">
          Email
        </label>
        <input type="text" className="w-75 mb-3" />

        <label htmlFor="telefono" className="form-label">
          Telefono
        </label>
        <input type="text" className="w-75 mb-3" />

        <button className="btn btn-success w-25 mt-4 ">Agregar Usuario</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
