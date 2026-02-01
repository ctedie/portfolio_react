import "./ItemPortfolio.css"

function ItemPortfolio({ image, alt, title, Description }) 
{
    return (
        <div className='contour'>
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{Description}</p>
        </div>
    )
}

export default ItemPortfolio