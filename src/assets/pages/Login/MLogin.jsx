import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function MLogin() {
  const [isRegistered, setIsRegistered] = useState(true);

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <>
    <div className="App">
      {isRegistered ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Register toggleForm={toggleForm} />
      )}
    </div>
    </>
  );
}

export default MLogin;