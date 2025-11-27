import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import { registerUser } from "../../services/Auth";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await registerUser(name, email, password);

      alert("Conta criada com sucesso!");
      navigate("/login"); // redireciona para login
    } catch (err: any) {
      console.error("Erro no cadastro:", err);
      setError(err.response?.data?.error || "Não foi possível criar a conta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Search />
      </div>

      <div className="login-container">
        <h2>Criar conta</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          </div>

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
            {loading ? "Criando conta..." : "Cadastrar"}
          </button>
        </form>
      </div>

      
        <div className="link-ok">
          <p><Link to ="/Login">Já possui uma conta?</Link></p>
        </div>
     

      <div>
        <Footer />
      </div>
    </>
  );
};

export default RegisterUser;
