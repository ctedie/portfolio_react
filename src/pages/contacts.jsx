import baniere from '../assets/img/banner.jpg'
import TitrePage from '../components/TitrePage'
import TitrSectionsContact from '../components/TitreSectionsContact';
import { CiMap, CiLocationOn } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { BsEnvelopeAt } from "react-icons/bs";

import './contacts.css'

function Contacts() {

  return (
    <>
      <img id="banniere" src={baniere} alt="Bannière" />
      <TitrePage titre="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />
      {/* <div className="contacts container col-md-6 col-lg-8 d-flex flex-column flex-md-row justify-content-between align-items-start mx-auto my-5"> */}
      <div className="contacts container shadow d-flex flex-column flex-md-row justify-content-md-between">
        <div className="container">
          <TitrSectionsContact titre="Formulaire de contact" />
          <form className=' mb-5 '>
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Votre nom" required/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Votre adresse mail" required/>
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" id="telephone" placeholder="Votre numéro de téléphone" required/>
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="message" rows="3" placeholder="Sujet" required></textarea>
            </div>
            <button className="btn btn-primary d-block mx-auto" type="submit">Envoyer</button>
          </form>
        </div>

        <div className="container">
          <TitrSectionsContact titre="Mes coordonnées" />
          <h3>John Doe</h3>
          <p><CiMap size={18} /> 40 rue Laure Diebold</p>
          <p><CiLocationOn size={18} /> 69009 Lyon, France</p>
          <p><FiSmartphone size={18} /> Téléphone : 06 12 34 56 78</p>
          <p><BsEnvelopeAt size={18} /> john.doe@gmail.com</p>
          <div className="map-container mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1770124217979!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
