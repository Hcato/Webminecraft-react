import React from 'react';
import "./MLogin.css"
import pika from "../../Multimedia/pika.gif"
const Login = ({ toggleForm }) => {
  return (
    <>
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p onClick={toggleForm}>¿No tienes una cuenta? Regístrate aquí</p>
    </div>
    <div className='fondo'>
    <img src={pika} alt="" />
    </div>
    <div>
        <h1>No dio tiempo para más...</h1>
    </div>
    </>
  );
};

export default Login;