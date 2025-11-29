import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import { getRecipeById } from "../../services/Recipes";
import "./styles.css";

interface Ingredient {
  name: string;
  measure?: string;
}

interface Receita {
  _id: string;
  title: string;
  category: string;
  time?: string;
  servings?: string;
  image?: string;
  instructions?: string;
  ingredients?: Ingredient[];
}

const ReceitaPage = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState<Receita | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getRecipeById(id!);
        setReceita(data);
      } catch (error) {
        console.error("Erro ao carregar receita:", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) return <p className="carregando">Carregando receita...</p>;
  if (!receita) return <p className="carregando">Receita não encontrada!</p>;

  return (
    <>
      <Search />

      <div className="receita-wrapper">
        <div className="receita-container">

          <h1 className="receita-titulo">{receita.title}</h1>

          <p className="receita-meta-detalhes">
            <span><strong>Categoria:</strong> {receita.category}</span>
            <span><strong>Tempo:</strong> {receita.time}</span>
            <span><strong>Porções:</strong> {receita.servings}</span>
          </p>

          {receita.image && (
            <img
              src={receita.image}
              className="receita-imagem"
              alt={receita.title}
            />
          )}

          <h2 className="subtitulo">Ingredientes</h2>
          <ul className="ingredientes-lista">
            {receita.ingredients?.map((ing, i) => (
              <li key={i}>
                {ing.name} {ing.measure && `- ${ing.measure}`}
              </li>
            ))}
          </ul>

          <h2 className="subtitulo">Modo de preparo</h2>
          <p className="instrucoes">
            {receita.instructions || "Nenhuma instrução cadastrada."}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ReceitaPage;
