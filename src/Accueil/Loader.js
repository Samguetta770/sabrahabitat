import React from 'react';
import './Loader.css'; // Assurez-vous de styliser votre loader

const Loader = () => {
  return (
    <div className="loader">
      {/* Vous pouvez utiliser un GIF, une animation CSS, ou tout autre design esthétique */}
      <div className="spinner"></div>
      <po>En raison de problèmes de réseau, la page peut mettre un peu plus de temps à se charger. Elle arrive tout de suite !</po>
    </div>
  );
};

export default Loader;
