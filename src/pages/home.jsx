import ProgressBar from 'react-bootstrap/ProgressBar'
import imagePrincipale from '../assets/img/hero-bg.jpg'
import photoJohn from '../assets/img/john-doe-about.jpg'
import './home.css'


function Home() {



  return (
    <>

      <div className='johndoe d-flex justify-content-center align-items-center mb-5'>
        <div className='container text-white text-center'>
          <h1 className='display-1 fw-bold'>Bonjour, je suis John Doe</h1>
          <h2 className='display-4 fw-bold'>Développeur Web Full Stack</h2>
          <button className='btn btn-danger' type="button" data-bs-toggle="modal" data-bs-target="#johndoeModal">En savoir plus</button>
        </div>
      </div>





{/* Modal Example */}

{/* <!-- Modal --> */}
<div className="modal fade" id="johndoeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      <div className="modal-header bg-dark text-light">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark text-white">
        ...
      </div>
      <div className="modal-footer bg-dark text-white">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* End Modal Example */}





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
