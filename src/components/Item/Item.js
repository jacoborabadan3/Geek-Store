import "./Item.scss"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

export const callback = cantidad => console.log(cantidad);

const Item = ({ product }) => {
    return (
        <div className="cards">
            <picture className="imgProduct">
                <img src={product.img} />
            </picture>
            <div className="contentCards">
                <h2>{product.title}</h2>
                <Link
                    to={`/producto/${product.id}`} className="btn">
                    Ver detalles
                </Link>
            </div>
        </div>
    )
}

export default Item