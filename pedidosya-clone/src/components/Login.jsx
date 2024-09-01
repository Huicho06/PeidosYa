// src/components/Login.jsx
import React from 'react';
import './Login.css'; // Importar el archivo CSS para estilos

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="/src/assets/logo.png" alt="PedidosYa Logo" className="login-logo" />
          <span className="login-close">Ahora no</span>
        </div>
        <div className="login-content">
          <h2>Elige cómo quieres ingresar</h2>
          <button className="login-button google">
            <img src="/src/assets/google-icon.png" alt="Google Icon" />
            Continuar con Google
          </button>
          <button className="login-button facebook">
            <img src="/src/assets/facebook-icon.png" alt="Facebook Icon" />
            Continuar con Facebook
          </button>
          <button className="login-button other">Otro método</button>
          <p className="login-footer">
            Al continuar, aceptas nuestros <a href="#">términos de uso</a> y <a href="#">política de privacidad</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
