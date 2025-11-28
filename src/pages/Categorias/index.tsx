import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import { buscarCategoriasAPI } from "../../services/Category";

interface Categoria {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

const Categorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    async function carregar() {
      try {
        setLoading(true);
        setError(null);

        const dados = await buscarCategoriasAPI();
        if (mounted) setCategorias(dados);
      } catch (err: unknown) {
        console.error("Erro ao buscar categorias:", err);

        if (!mounted) return;
        if (axios.isAxiosError(err)) {
          const axiosErr = err as AxiosError<{ message?: string }>;

          const mensagem =
            axiosErr.response?.data?.message ||
            axiosErr.message ||
            "Erro ao carregar categorias.";

          setError(mensagem);
        } else {
          setError("Erro inesperado ao carregar categorias.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    carregar();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p className="loading">Carregando...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      <div>
        <Search />
      </div>

      <div className="categorias-container">
        <h2 className="section-title">Categorias</h2>

        <div className="recipe-grid">
          {categorias.map((cat) => (
            <div
              className="recipe-card"
              key={cat.idCategory}
              role="button"
              tabIndex={0}
              onClick={() =>
                navigate(`/categoria/${encodeURIComponent(cat.strCategory)}`)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/categoria/${encodeURIComponent(cat.strCategory)}`);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={cat.strCategoryThumb}
                alt={cat.strCategory}
                className="recipe-image"
              />
              <div className="recipe-info">
                <h3 className="recipe-title">{cat.strCategory}</h3>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Categorias;
