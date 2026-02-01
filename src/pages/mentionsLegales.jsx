import React from 'react-bootstrap/Accordion'
import './mentionsLegales.css'

function MentionsLegales() {

  return (
    <>
      <h1>Mentions légales</h1>
      <div class="accordion col-lg-8" id="accordionExample">
        <div class="accordion-item"> {/* Éditeur du site */ }
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Editeur du site
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div>
                {/* TODO : Ajouter les icones */}
                <h2>John Doe</h2>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>Téléphone : 06 12 34 56 78</p>
                <p>Email : john.doe@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item"> {/* Hébergeur du site */ }
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Hébergeur
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div>
                <h2 id='titre-hebergeur'>alwaysdata</h2>
                <p>91 Rue Faubourge Saint-Honoré, 75009 Paris</p>
                <a href="#">www.alwaysdata.com</a> {/* TODO : Ajouter le lien et l'icone*/ }
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item"> {/* Crédits */ }
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MentionsLegales
