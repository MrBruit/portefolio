import './projet.css';
import projetsData from "../assets/data/data";

function Projet() {
  return (
    <>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      
      <section className="projets">
        <h2>Projets</h2>
        {projetsData.map((projet) => (
          <div className="projet-card" key={projet.id}>
            <h3>{projet.title}</h3>
            <div className="illus-container">
                <img src={projet.img || "/src/assets/images/construction.png"} alt={`Miniature de ${projet.title}`} />
                
                {projet.techno.length > 0 && (
                <div className="technos-container">
                    {projet.techno.map((tech, index) => (
                    <i key={index} className={`devicon-${tech}`}></i>
                    ))}
                </div>
                )}
            </div>
            <div className="description-link">
                <p>{projet.description}</p>
                <a href={projet.link} target='blank'><img src="/src/assets/images/lien-externe3.png" alt="lien externe" /></a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projet;