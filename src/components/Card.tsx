import './card.css'
import { useState } from 'react';

function Card () {
    
    const [showEmail, setShowEmail] = useState(false);
    const [showDiscord, setShowDiscord] = useState(false);
    const email = "goujflo@gmail.com";
    const discord = "MrBruit"
    const copyToClipboardEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      
      setShowEmail(true);
      
      // Le toast disparaît après 2,5 secondes
      setTimeout(() => {
        setShowEmail(false);
      }, 2500);
    } catch (err) {
      console.error("Erreur de copie", err);
    }
  };
  const copyToClipboardDiscord = async () => {
    try {
      await navigator.clipboard.writeText(discord);
      
      setShowDiscord(true);
      
      // Le toast disparaît après 2,5 secondes
      setTimeout(() => {
        setShowDiscord(false);
      }, 2500);
    } catch (err) {
      console.error("Erreur de copie", err);
    }
  };
    const age = new Date().getFullYear() - 1990;

    return (
        <>
            <section className="card">
                <h1>Florent Goujon</h1>
                <img className='photo' src="/images/portrait.png" alt="My profil picture" />
                <div className='info'>
                    <h2>Développeur Full Stack</h2>
                    <button  type='button' className='mail' onClick={copyToClipboardEmail}>goujflo@gmail.com</button>
                    {showEmail && (
        <div className="toast">
          ✓ Email copié avec succès !
        </div>
      )}{showDiscord && (
        <div className="toast">
          ✓ Discord copié avec succès !
        </div>
      )}
                    <div className='local-info'>
                        <span>{age} ans</span>
                        <span>Gironde, France</span>
                    </div>
                </div>
                <div className='contact'>
                    <a href='https://github.com/MrBruit' target='blank' className='link'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
</a>
                    <a href='https://www.linkedin.com/in/florent-goujon-903308387/' target='blank' className='link'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
</a>
                    <button type='button' onClick={copyToClipboardDiscord}><img src="src/assets/images/discord.png" alt="Discord's logo" /></button>
                    <a href='src/assets/data/CV_Florent_GOUJON.pdf'  target="_blank"
  rel="noopener noreferrer" className='link'><img src="src/assets/images/cv.png" alt="Discord's logo" /></a>
                </div>
            </section>
        </>
    )
}

export default Card