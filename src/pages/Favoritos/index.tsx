import { useEffect, useState } from "react";

import Search from "../../components/Search";
import Footer from "../../components/Footer";

interface ReceitaFavorita {
  image: string;
  title: string;
  time: string;
  servings: string;
}

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState<ReceitaFavorita[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("favoritos");
    if (saved) {
      setFavoritos(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  return (
    <>
      <div>
        <Search />
      </div>

      <section className="banner">
        <div className="container">
          <h2>Suas receitas favoritas</h2>
          <p>Veja aqui as receitas que você marcou como favoritas</p>
        </div>
      </section>

      <main className="container">
        <section className="recipe-section">
          <h3 className="section-title">Favoritos</h3>

          {loading && <p>Carregando favoritos...</p>}

          {!loading && favoritos.length === 0 && (
            <p>Você ainda não adicionou nenhuma receita aos favoritos.</p>
          )}

          <div className="recipe-grid">
            {favoritos.map((recipe, index) => (
              <div className="recipe-card" key={index}>
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
              </div>
            ))}
          </div>
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Favoritos;
