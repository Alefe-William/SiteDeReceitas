import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
          <div className="footer-links">
            <Link to="/Sobre">Sobre nós</Link>
            <Link to="/Contatos">Contato</Link>
            <Link to="#">Termos de uso</Link>
            <Link to="#">Política de privacidade</Link>
          </div>
          <p>© 2025 CookHub - Todos os direitos reservados</p>
        </footer>

    )
}

export default Footer