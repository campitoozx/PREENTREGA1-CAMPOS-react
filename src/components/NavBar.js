import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      {/* Marca INFOCAM */}
      <a className="navbar-brand" href="/">INFOCAM</a>

      {/* Categorías de Navegación */}
      <ul className="navbar-menu">
        <li><a href="/category1">NOSOTROS</a></li>
        <li><a href="/category2">PRODUCTOS</a></li>
        <li><a href="/category3">MARCAS</a></li>
        <li><a href="/category4">CONTACTO</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;