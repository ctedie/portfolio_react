import ProgressBar from 'react-bootstrap/ProgressBar'
import imagePrincipale from '../assets/img/hero-bg.jpg'
import photoJohn from '../assets/img/john-doe-about.jpg'
import './home.css'

function Home() {

  return (
    <>
      <img id="imgPrincipale" src={imagePrincipale} alt="photo principale" />
      <div className='infos col-md-6 col-lg-8 col-sm-6'>
        <div className='aPropos'>
          <h2 className='infos__titre'>A propos</h2>
          <img className='infos__photo' src={photoJohn} alt="photo de John Doe" />
          <p className='infos__texte'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
          <p className='infos__texte'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
          <p className='infos__texte'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
        </div>
        <div className='competences'>
          <h2 className='infos__titre'>Mes compétences</h2>
          <p className='labelProgressBar'>HTML5 90%</p>
          <ProgressBar className='progressBar' now={90} label="90%" />
          <p className='labelProgressBar'>CSS 80%</p>
          <ProgressBar className='progressBar' now={80} label="80%" />
          <p className='labelProgressBar'>JavaScript 70%</p>
          <ProgressBar className='progressBar' now={70} label="70%" />
          <p className='labelProgressBar'>PHP 60%</p>
          <ProgressBar className='progressBar' now={60} label="60%" />
          <p className='labelProgressBar'>React 50%</p>
          <ProgressBar className='progressBar' now={50} label="50%" />
        </div>
      </div>
    </>
  )
}

export default Home

/**
 *           <div className="progress">
            <div className="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

 */