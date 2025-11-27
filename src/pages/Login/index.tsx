import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import { loginUser } from "../../services/Auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState<string | null>(null); 

  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userData = await loginUser(email, password);
      
      console.log("Login OK:", userData);

      alert("Login realizado com sucesso!");

      // Se o backend retornar token -> salve aqui
      // localStorage.setItem("token", userData.token);

      navigate("/"); 

    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || "Erro ao realizar login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Search/>
      </div>

      <div className="login-container">
        <h2>Login</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Login;
