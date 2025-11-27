import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import "./styles.css";

const Search = () => {
  const { user } = useContext(AuthContext);

  return (
    <header>
      <div className="container header-content">
        <h1 className="logo">CookHub</h1>

        <div className="search-bar">
          <input type="text" placeholder="Buscar receitas..." />
          <button className="search-btn">
            <HiSearch />
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Categorias">Categorias</Link>
            </li>
            <li>
              <Link to="/Favoritos">Favoritos</Link>
            </li>

            {!user ? (
              <li>
                <Link to="/Login">Entrar</Link>
              </li>
            ) : (
              <li className="user-info">
                <img
                  src={
                    user.avatar ||
                    `https://ui-avatars.com/api/?name=${user.name}&background=ff6b00&color=fff`
                  }
                  className="user-avatar"
                  alt="Avatar"
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
