
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

          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
            {/*descrição do projeto, da equipe, tecnologias usadas etc. */}
           Somos um grupo de desenvolvedores apaixonados por tecnologia e culinária, e criamos este site
        com o objetivo de tornar o ato de cozinhar mais simples, prático e acessível para todos.
        Nosso propósito é ajudar tanto chefs profissionais quanto pessoas comuns na cozinha de casa,
        oferecendo receitas detalhadas, dicas úteis e recursos intuitivos para tornar o preparo de
        pratos um momento mais leve e prazeroso.
          </p>
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
