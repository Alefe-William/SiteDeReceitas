import { useEffect, useState } from "react";
import "./styles.css";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import { getPopularRecipes, getQuickRecipes } from "../../services/Recipes";
import axios, { AxiosError } from "axios";
import { Link } from "react-router-dom";

interface Receita {
  _id: string;
  image: string;
  title: string;
  time: string;
  servings: string;
}

const Home = () => {
  const [popularRecipes, setPopularRecipes] = useState<Receita[]>([]);
  const [quickRecipes, setQuickRecipes] = useState<Receita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [populares, rapidas] = await Promise.all([
          getPopularRecipes(),
          getQuickRecipes(),
        ]);

        setPopularRecipes(populares);
        setQuickRecipes(rapidas);
      } catch (err: unknown) {
        console.error("Erro ao carregar receitas:", err);

        if (axios.isAxiosError(err)) {
          const axiosErr = err as AxiosError<{ message?: string }>;

          setError(
            axiosErr.response?.data?.message ||
              axiosErr.message ||
              "Erro ao carregar receitas."
          );
        } else {
          setError("Erro ao carregar receitas.");
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <>
      <div>
        <Search />
      </div>

      <section className="banner">
        <div className="container">
          <h2>Receitas deliciosas para o seu dia a dia</h2>
          <p>Encontre as melhores receitas testadas e aprovadas</p>
        </div>
      </section>

      <main className="container">
        {loading && <p>Carregando receitas...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <>
            {/* RECEITAS POPULARES */}
            <section className="recipe-section">
              <h3 className="section-title">Receitas populares</h3>

              <div className="recipe-grid">
                {popularRecipes.map((recipe) => (
                  <Link
                    to={`/receita/${recipe._id}`}
                    className="recipe-card"
                    key={recipe._id}
                  >
                    <div
                      className="recipe-image"
                      style={{ backgroundImage: `url(${recipe.image})` }}
                    ></div>

                    <div className="recipe-info">
                      <h4 className="recipe-title">{recipe.title}</h4>

                      <div className="recipe-meta">
                        <span>{recipe.time}</span>
                        <span>{recipe.servings}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* RECEITAS RÁPIDAS */}
            <section className="recipe-section">
              <h3 className="section-title">Receitas rápidas</h3>

              <div className="recipe-grid">
                {quickRecipes.map((recipe) => (
                  <Link
                    to={`/receita/${recipe._id}`}
                    className="recipe-card"
                    key={recipe._id}
                  >
                    <div
                      className="recipe-image"
                      style={{ backgroundImage: `url(${recipe.image})` }}
                    ></div>

                    <div className="recipe-info">
                      <h4 className="recipe-title">{recipe.title}</h4>

                      <div className="recipe-meta">
                        <span>{recipe.time}</span>
                        <span>{recipe.servings}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;
