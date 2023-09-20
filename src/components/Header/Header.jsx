/* eslint-disable */
import './Header.css'
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo-header.svg'

const Header = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname); // Obtenez le chemin de la page actuelle
  useEffect(() => {
    // Mettez à jour le chemin de la page actuelle lorsque l'URL change
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Écoutez les changements d'URL
    window.addEventListener('popstate', handleLocationChange);

    // Nettoyez l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <header className="header">
      <img src={logo} alt="logo Kasa" className="header__logo" />
      <nav>
        <ul className="header__menu">
          <li className={`header__menu-item ${currentPath === '/' ? 'active' : ''}`}>
            <a href="#home">Accueil</a>
          </li>
          <li className={`header__menu-item ${currentPath === '/a-propos' ? 'active' : ''}`}>
            <a href="#about">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
