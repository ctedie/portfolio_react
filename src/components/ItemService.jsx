import { BsBrush } from "react-icons/bs";
import { MdHeight } from "react-icons/md";
import "./Itemservice.css";

function ItemService({ logo, alt, title, Description }) 
{
    return (

        <div className="carte container card d-flex align-items-center" style={{ width: "18rem" }}>
            <img src={logo} alt={alt} className="card-img-top pt-3" />
            <div className="card-body">
                <h5 className="card-title text-center fw-bold">{title}</h5>
                <p className="card-text text-center">{Description}</p>
            </div>
        </div>
    )
}

export default ItemService