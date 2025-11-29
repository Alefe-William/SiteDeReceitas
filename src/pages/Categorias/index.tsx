import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import { getRecipesByCategory } from "../../services/Recipes";
import "./styles.css";

interface Receita {
  _id: string;
  title: string;
  image?: string;
  time?: string;
  servings?: string;
}

const Categorias = () => {
  const { nome } = useParams<{ nome: string }>();
  const navigate = useNavigate();

  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categorias = [
    { nome: "Frango", img: "https://cdn-icons-png.flaticon.com/512/6978/6978167.png" },
    { nome: "Carne", img: "https://cdn-icons-png.flaticon.com/512/2541/2541030.png" },
    { nome: "Sobremesa", img: "https://cdn-icons-png.flaticon.com/512/5347/5347946.png" },
    { nome: "Rápidas", img: "https://cdn-icons-png.flaticon.com/512/8775/8775447.png" },
    { nome: "Vegana", img: "https://cdn-icons-png.flaticon.com/512/5581/5581203.png" },
    { nome: "Bebidas", img: "https://cdn-icons-png.flaticon.com/512/917/917940.png" },
    { nome: "Massas", img: "https://cdn-icons-png.freepik.com/512/1669/1669082.png" }
  ];

  useEffect(() => {
    async function load() {
      if (!nome) {
        setReceitas([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await getRecipesByCategory(nome);
        setReceitas(data || []);
      } catch (err) {
        console.error("Erro ao buscar receitas por categoria:", err);
        setError("Erro ao carregar receitas.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [nome]);

  return (
    <>
      <Search />

      <div className="categoria-container">
        <h2 className="categorias-header">Categorias</h2>
        <div className="categoria-grid">

        {categorias.map((cat) => (
          <div
            key={cat.nome}
            className="categoria-card"
            onClick={() => navigate(`/categorias/${cat.nome}`)} // <-- CORRIGIDO
          >
            <img src={cat.img} alt={cat.nome} className="categoria-img" />
            <h3 className="categoria-title">{cat.nome}</h3>
          </div>
        ))}
        </div>

        {nome && (
          <>
            <h2 style={{ marginTop: "30px" }}>Receitas de {nome}</h2>

            {loading && <p>Carregando receitas...</p>}
            {!loading && error && <p className="error">{error}</p>}
            {!loading && !error && receitas.length === 0 && (
              <p>Nenhuma receita encontrada.</p>
            )}

            <div className="recipe-grid">
              {receitas.map((r) => (
                <Link key={r._id} to={`/receita/${r._id}`} className="recipe-card">
                  <div
                    className="recipe-image"
                    style={{ backgroundImage: `url(${r.image})` }}
                  />
                  <div className="recipe-info">
                    <h4 className="recipe-title">{r.title}</h4>
                    <div className="recipe-meta">
                      <span>{r.time}</span>
                      <span>{r.servings}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Categorias;
