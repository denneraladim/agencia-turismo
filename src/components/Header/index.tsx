
import styles from "./Header.module.scss";
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da Agência de Turismo" className={styles.logo} />

    <nav className={styles.nav} aria-label="Menu principal">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>

        </ul>
    </nav>

    </header>
  )
}

export default Header;