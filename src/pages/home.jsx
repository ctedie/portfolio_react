import { useEffect, useState } from "react";

import ProgressBar from 'react-bootstrap/ProgressBar'
import imagePrincipale from '../assets/img/hero-bg.jpg'
import photoJohn from '../assets/img/john-doe-about.jpg'

import { IoPersonOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsCardText } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

import './home.css'


function Home() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");

        const data = await res.json();
        setUser(data);
        if (!data) {
          console.error("Erreur lors de la récupération des données utilisateur");
        }
    };

    fetchUser();
  }, []);

  return (
    <>

      <div className='johndoe d-flex justify-content-center align-items-center mb-5'>
        <div className='container text-white text-center'>
          <h1 className='display-1 fw-bold'>Bonjour, je suis John Doe</h1>
          <h2 className='display-4 fw-bold'>Développeur Web Full Stack</h2>
          <button className='btn btn-danger' type="button" data-bs-toggle="modal" data-bs-target="#johndoeModal">En savoir plus</button>
        </div>
      </div>


      {/* <!-- Modal --> */}
      <div className="modal fade" id="johndoeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Mon profil Github</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="container modal-body bg-dark text-white d-flex flex-column align-items-start">
              {user ? (
                <div className="container d-flex flex-md-row align-items-center">
                  <div className="w-50"><img className="img-fluid" src={user.avatar_url} alt="Photo de profil de John Doe"/></div>
                  <div className="w-50">
                    <p className="border-bottom border-secondary w-100"><IoPersonOutline className="me-2" /><a href="https://github.com/JohnDoe" target="_blank">{user.name}</a></p>
                    <p className="border-bottom border-secondary w-100"><IoLocationOutline className="me-2" />{user.location}</p>
                    <p className="border-bottom border-secondary w-100"><BsCardText className="me-2" />{user.bio}</p>
                    <p className="border-bottom border-secondary w-100"><BsBox className="me-2" />Repositories : {user.public_repos}</p>
                    <p className="border-bottom border-secondary w-100"><IoPeopleOutline className="me-2" />Followers : {user.followers}</p>
                    <p><IoPeopleOutline className="me-2" />Following : {user.following}</p>
                  </div>
                </div>
              ) : (
                <p>Chargement du profil...</p>
              )}
            </div>
            <div className="modal-footer bg-dark text-white">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
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
