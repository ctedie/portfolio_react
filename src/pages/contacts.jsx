import baniere from '../assets/img/banner.jpg'
import TitrePage from '../components/TitrePage'
import { CiMap, CiLocationOn } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { BsEnvelopeAt } from "react-icons/bs";

function Contacts() {

  return (
    <>
      <img id="banniere" src={baniere} alt="Bannière" />
      <TitrePage titre="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />
      {/* <div className="contacts container col-md-6 col-lg-8 d-flex flex-column flex-md-row justify-content-between align-items-start mx-auto my-5"> */}
      <div className="contacts container d-flex flex-column flex-md-row justify-content-md-between">
        <div className="">
          <h2>Formulaire de contact</h2>
          <form className=' mb-5 '>
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Votre nom" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Votre adresse mail" />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" id="telephone" placeholder="Votre numéro de téléphone" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="message" rows="3" placeholder="Sujet"></textarea>
            </div>
            <button className="btn btn-primary d-block mx-auto" type="submit">Envoyer</button>
          </form>
        </div>

        <div className="contact-coordonnees">
          <h2>Mes coordonnées</h2>
          <h3>John Doe</h3>
          <p><CiMap size={18} /> 40 rue Laure Diebold</p>
          <p><CiLocationOn size={18} /> 69009 Lyon, France</p>
          <p><FiSmartphone size={18} /> Téléphone : 06 12 34 56 78</p>
          <p><BsEnvelopeAt size={18} /> john.doe@gmail.com</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=TON_CODE_ICI"
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
