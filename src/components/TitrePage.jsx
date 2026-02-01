import './TitrePage.css';

function TitrePage({ titre, description }) 
{
  return (
    <div className="titre-page-container">
      <h1 className="titre-page">{titre}</h1>
      <p className="description-titre">{description}</p>
    </div>
  )
}

export default TitrePage;