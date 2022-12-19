import "./Item.scss"
import { Link } from "react-router-dom";


const Item = ({ product }) => {
    return (
        <div className="cards">
            <picture className="imgProduct">
                <img src={product.img} />
            </picture>
            <div className="contentCards">
                <h2>{product.title}</h2>
                <Link
                    to={`/producto/${product.category}/${product.id}`} className="btn">
                    Ver detalles
                </Link>
            </div>
        </div>
    )
}

export default Item