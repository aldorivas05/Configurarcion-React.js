import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/Logo2.0.png';
import userIcon from '../assets/static/iconoUser.png';

const Header= () => (
    <header className="header">
        <img className="header__img" src={logo} alt="CodeVideo Logo"  />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="Icono User"  />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="">Cuenta</a></li>
                <li><a href="">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>  
);
   

export default Header;