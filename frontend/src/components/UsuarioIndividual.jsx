

const UsuarioIndividual = ({ name, mail, phone }) => {
    return (
      <div>
        <h2>{name}</h2>
        <p><b>Correo electrónico: </b><i>{mail}</i></p>
        <p><b>Teléfono: </b><i>{phone}</i></p>
      </div>
    );
  };

  export default UsuarioIndividual;