function TitrePage({ titre, description }) 
{
  return (
    <div className="container titre-page-container text-center my-4 border-primary border-3 border-bottom pb-3 w-50 border-primary">
      <h1 className="titre-page fw-bold">{titre}</h1>
      <p className="description-titre">{description}</p>
    </div>
  )
}

export default TitrePage;