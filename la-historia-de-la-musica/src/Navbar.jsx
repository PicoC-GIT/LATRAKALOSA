// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <aside className="sidebar">
      <div className="navbar">
        {/* Reemplaza con tu icono */}
        <div className="ico">
            <img src="./Dino.png" alt="Icono" />
        </div>
      </div>
      <nav className="nav-links">
        <a href="/">Inicio</a>
        <a href="/catalogo">Catálogo</a>
        <a href="/favoritos">Favoritos</a>
        {/* Agrega más enlaces según sea necesario */}
      </nav>
    </aside>
  );
};

export default Navbar;