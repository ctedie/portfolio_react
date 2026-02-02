import ProgressBar from 'react-bootstrap/ProgressBar'
import imagePrincipale from '../assets/img/hero-bg.jpg'
import photoJohn from '../assets/img/john-doe-about.jpg'


function Home() {

  return (
    <>

      <div className='d-flex justify-content-center mb-5'>
        <img className='h-75' src={imagePrincipale} alt="photo principale" />
      </div>

      <div className='container d-flex flex-column flex-md-row'>
        <div className='container w-md-50'>
          <h2 className='border-bottom border-2 border-primary'>À propos</h2>
          <div ><img className='img-fluid' src={photoJohn} alt="photo de John Doe" /></div>
          <p className='infos__texte'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
          <p className='infos__texte'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
          <p className='infos__texte'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
        </div>
        <div className='container w-md-50' >
          <h2 className='border-bottom border-2 border-primary'>Mes compétences</h2>

          <p className='labelProgressBar mt-3 mb-1'>HTML5 90%</p>
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" aria-label="HTML5 90%" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <p className='labelProgressBar mt-3 mb-1'>CSS 80%</p>
          <div className="progress mt-0">
            <div className="progress-bar bg-info mt-0" role="progressbar" aria-label="CSS 80%" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <p className='labelProgressBar mt-3 mb-1'>JavaScript 70%</p>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" aria-label="JavaScript 70%" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <p className='labelProgressBar mt-3 mb-1'>PHP 60%</p>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="PHP 60%" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <p className='labelProgressBar mt-3 mb-1'>React 50%</p>
          <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" aria-label="React 50%" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

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