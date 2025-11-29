import Search from "../../components/Search"
import Footer from "../../components/Footer"

const Contatos = () => {
  return (
    <>
      <div>
        <Search />
      </div>

      <section className="recipe-section" style={{ textAlign: "center" }}>
        <h3 className="section-title">Nossas Redes Sociais</h3>

        <a 
          href="https://www.instagram.com/eduardomcarvalho1804/"
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <img 
            src="public/instagram.jpg"
            alt="Instagram"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              transition: "0.3s"
            }}
          />
        </a>

        <p style={{ marginTop: "12px", fontSize: "18px" }}>
        </p>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Contatos;
