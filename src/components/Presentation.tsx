import './presentation.css'

function Presentation () {
   return (
    <>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <section className="presentation">
        <h2>Mon Portfolio</h2>
        <p className="abstract">Développeur Full Stack junior actuellement en Mastère à l'École Turing, je conçois des applications web modernes et performantes en combinant des technos comme Vue.js, Express et MySQL. Fort d'une première vie professionnelle riche en management et en gestion de flux, j'apporte aux projets une approche structurée, une grande capacité d'écoute et un esprit d'équipe éprouvé. Découvrez ici mes projets académiques et personnels, et n'hésitez pas à me contacter pour une future collaboration !
        </p>
      </section>
      <section className="tech-stack">

        <h2>Stack Technique</h2>

        <div className="stack-categories">

          <div className="stack-group">
            <h3>Frontend</h3>
              <ul className="stack-list">
                <li><i className="devicon-react-plain"></i>React</li>
                <li><i className="devicon-typescript-plain"></i>TypeScript</li>
                <li><i className="devicon-html5-plain"></i>HTML</li>
                <li><i className="devicon-css3-plain"></i>CSS</li>
              </ul>
          </div>

          <div className="stack-group">
            <h3>Backend</h3>
              <ul className="stack-list">
                <li><i className="devicon-php-plain"></i>PHP</li>
                <li><i className="devicon-express-original"></i>Express.js</li>
              </ul>
          </div>

          <div className="stack-group">
            <h3>Base de données</h3>
            <ul className="stack-list">
              <li><i className="devicon-mysql-original"></i>MySQL</li>
            </ul>
          </div>

          <div className="stack-group">
            <h3>Outils & Environnement</h3>
            <ul className="stack-list">
              <li><i className="devicon-vscode-plain"></i>VS Code</li>
              <li><i className="devicon-bash-plain"></i>Bash</li>
              <li><i className="devicon-docker-plain"></i>Docker</li>
              <li><i className="devicon-figma-plain"></i>Figma</li>
            </ul>
          </div>

        </div>
       </section>
    </>
    )
}

export default Presentation