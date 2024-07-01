import React from 'react';

const Register = ({ toggleForm }) => {
  return (
    <div className="register-container">
      <h2>Regístrate</h2>
      <form>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p onClick={toggleForm}>¿Ya tienes una cuenta? Inicia sesión aquí</p>
    </div>
  );
};

export default Register;