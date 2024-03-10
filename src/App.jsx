import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === 'claveSegura123*') {
      const d = new Date();
      const diaSemana = d.getDay();
      let mensaje = '';
      switch (diaSemana) {
        case 1:
          mensaje = 'Los lunes amo el color de tus ojos';
          break;
        case 2:
          mensaje = 'Los martes amo tus labios';
          break;
        case 3:
          mensaje = 'Los miércoles tu cabello';
          break;
        case 4:
          mensaje = 'Los jueves esa sonrisa que me enamora';
          break;
        case 5:
          mensaje = 'Los viernes amo tus manos, tus pies...';
          break;
        case 6:
          mensaje = 'Los sábados amo tu sonrisa, tu risa, tu forma de ser. Hoy casi no podemos hacer el frutifantastico JAJAJAJAJAJAJAJAJAJAJ';
          break;
        case 0:
          mensaje = 'Los domingos te pienso como todos los días, los domingos siempre repaso toda la semana y me doy cuenta de que me enamoré';
          break;
        default:
          mensaje = '';
      }
      setContent(mensaje);
    } else {
      alert('Contraseña incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="App">
      <h1>Paola, me encantas</h1>
      <input
        type="password"
        placeholder="Ingrese la contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handlePasswordSubmit}>Ingresar</button>
      {content && <p>{content}</p>}
    </div>
  );
};

export default App;
