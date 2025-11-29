import { Link, useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import "./styles.css";

const Search = () => {
  const auth = useContext(AuthContext);
  const user = auth?.user ?? null;
  const navigate = useNavigate();

  const categorias = [
    "Frango",
    "Carne",
    "Sobremesa",
    "Rápidas",
    "Vegana",
    "Bebidas",
    "Massas"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  function handleMouseEnter() {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  }

  function handleMouseLeave() {
    const id = window.setTimeout(() => setIsOpen(false), 200);
    setTimeoutId(id);
  }

  return (
    <header>
      <div className="container header-content">
        <h1 className="logo">CookHub</h1>

        {/* ---------------- BUSCA ---------------- */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar receitas..." />
          <button className="search-btn">
            <HiSearch />
          </button>
        </div>

        {/* ---------------- MENU ---------------- */}
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>

            {/* ---------------- DROPDOWN ---------------- */}
            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="dropdown-title">Categorias</span>

              {isOpen && (
                <div className="dropdown-menu">
                  {categorias.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => navigate(`/categorias/${cat}`)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link to="/Favoritos">Favoritos</Link>
            </li>

            {/* ---------------- LOGIN / PERFIL ---------------- */}
            {!user ? (
              <li>
                <Link to="/Register" className="login-btn">
                  Entrar
                </Link>
              </li>
            ) : (
              <li className="user-info">
                <img
                  src={
                    user.image ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.name
                    )}&background=ff6b00&color=fff`
                  }
                  className="user-avatar"
                />
                <span className="user-name">{user.name}</span>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Search;
