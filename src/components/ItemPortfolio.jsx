import "./ItemPortfolio.css"

function ItemPortfolio({ image, alt, title, Description, textFooter }) 
{
    return (
        
        <div className="card mb-4" style={{ width: "20rem" }}>
            <img src={image} alt={alt} className="card-img-top" />
            <div className="card-body justify-content-center d-flex flex-column align-items-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{Description}</p>
                <a href="#" className="btn btn-primary ">Voir le site</a>
            </div>
            <div className="card-footer justify-content-center d-flex align-items-center">
                {textFooter}
            </div>

        </div>
    )
}

export default ItemPortfolio