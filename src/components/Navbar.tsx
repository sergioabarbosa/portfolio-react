import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
