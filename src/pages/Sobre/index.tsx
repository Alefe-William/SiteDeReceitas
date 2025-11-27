
import Search from "../../components/Search";
import Footer from "../../components/Footer";

const Sobre = () => {
  return (
    <>
      <div>
        <Search />
      </div>

      <section className="banner">
        <div className="container">
          <h2>Sobre o Projeto</h2>
          <p>Conheça mais sobre nossa equipe e o desenvolvimento da plataforma</p>
        </div>
      </section>

      <main className="container">
        <section className="recipe-section">
          <h3 className="section-title">Quem somos</h3>

          {/* Vou colocar as fotos aqui */}
          <div
            style={{
              width: "100%",
              height: "250px",
              backgroundColor: "#ddd",
              borderRadius: "8px",
              marginBottom: "20px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Exemplo futuro:
              style={{ backgroundImage: `url(/img/equipe.jpg)` }}
            */}
          </div>

          {/* Espaço para texto */}
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
            {/*descrição do projeto, da equipe, tecnologias usadas etc. */}
            Texto sobre o projeto e os integrantes será adicionado aqui.
          </p>
        </section>

        <section className="recipe-section">
          <h3 className="section-title">Nossas Redes Sociais</h3>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {/* Link dos 5 integrantes — substitua depois */}
            <li style={{ marginBottom: "10px" }}>
              <a href="#" target="_blank">Integrante 1 — Link</a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" target="_blank">Integrante 2 — Link</a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" target="_blank">Integrante 3 — Link</a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" target="_blank">Integrante 4 — Link</a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" target="_blank">Integrante 5 — Link</a>
            </li>
          </ul>
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
