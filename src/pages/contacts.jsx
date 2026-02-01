import baniere from '../assets/img/banner.jpg'
import TitrePage from '../components/TitrePage'


function Contacts() {

  return (
    <>
      <img id="banniere" src={baniere} alt="Bannière" />
      <TitrePage titre="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />
      <div className="contacts col-md-6 col-lg-8 flex space-around">
        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <form>
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
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        <div className="contact-coordonnees">
          <h2>Mes coordonnées</h2>
          <h3>John Doe</h3>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 12 34 56 78</p>
          <p>john.doe@gmail.com</p>
{/*           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.294481315674!3d48.858370079287!"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
 */}        </div>
      </div>
    </>
  )
}

export default Contacts
