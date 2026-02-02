import "./ItemPortfolio.css"

function ItemPortfolio({ image, alt, title, Description, textFooter }) 
{
    return (
        
            <div className="card mb-4" style={{ width: "18rem" }}>
                <img src={image} alt={alt} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{Description}</p>
                        <a href="#" className="btn btn-primary ">Voir le site</a>
                        <div className="card-footer">
                            {textFooter}
                        </div>
                    </div>
            </div>
    )
}

export default ItemPortfolio