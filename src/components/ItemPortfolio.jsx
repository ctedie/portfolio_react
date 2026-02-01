import "./ItemPortfolio.css"

function ItemPortfolio({ image, alt, title, Description }) 
{
    return (
        <div className='contour'>
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{Description}</p>
            <button type="button" className="btn btn-primary">Voir le site</button>
        </div>
    )
}

export default ItemPortfolio