import React from 'react-bootstrap/Accordion'
import TitrePage from '../components/TitrePage'

import { CiMap, CiLocationOn } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { BsEnvelopeAt } from "react-icons/bs";

import './mentionsLegales.css'

function MentionsLegales() {

  return (
    <>
      <TitrePage titre="Mentions légales" />
      <div className="accordion container col-lg-8" id="accordionExample">
        <div className="accordion-item"> {/* Éditeur du site */ }
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Editeur du site
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                {/* TODO : Ajouter les icones */}
                <h2>John Doe</h2>
                <p><CiMap size={18} /> 40 rue Laure Diebold</p>
                <p><CiLocationOn size={18} /> 69009 Lyon, France</p>
                <p><FiSmartphone size={18} /> 06 12 34 56 78</p>
                <p><BsEnvelopeAt size={18} /> john.doe@example.com</p>
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
              Crédits
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h2 id='titre-credits'>Crédits</h2> {/* TODO : Ajouter les liens */ }
              <p>Ce site a été réalisé par John Doe, étudiant au <span>Centre Européen de formation</span>.</p>
              <p><em>Les images utilisées sur ce site sont libre de droits et ont été obtenues sur le siter <a href="http://www.pixabay.com" target='blank'>Pixabay</a></em></p>
              <p><em>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/" target="_blank">John Doe Icons erstelit von Freepik - Flaticon</a></em></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MentionsLegales
