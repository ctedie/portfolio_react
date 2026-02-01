
function ItemService({ logo, alt, title, Description }) 
{
    return (
        
            <div className="card" style={{ width: "18rem" }}>
                <img src={logo} alt={alt} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{title}</h5>
                        <p className="card-text text-center">{Description}</p>
                    </div>
            </div>
    )
}

export default ItemService