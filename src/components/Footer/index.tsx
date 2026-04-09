
import styles from "./Footer.module.scss";

const Footer = ({ year = new Date().getFullYear() }) => {
    return (
        <footer className={styles.footer}>
            <p>© {year} Agência Turismo. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;