import "./ItemCount.scss";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContext";
import { getProductById, Product } from "../../asyncMoke";
import { Link, useParams } from "react-router-dom";

/** Componente : */
const ItemCount = ({ stock, initial, onAdd }) => {

    const { productId } = useParams();

    const [productItem, setProductItem] = useState({});

    useEffect(() => {
        getProductById(productId)
            .then(Response => setProductItem(Response));
    }, []);

    const [count, setCount] = useState(initial);

    const { isInCart } = useContext(cartContext);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className="purchase">

            <section className="mainBtn">
                <button className="btnSymbol"
                    onClick={() => decrement()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
                <h2 className="numberCount">{count}</h2>
                <button className="btnSymbol"
                    onClick={() => increment()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </section>
            {
                !isInCart(productItem.id) ?
                    (
                        <button
                            className="carrito-btn"
                            onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    )
                    :
                    (
                        <Link
                        className="btn-Purchase"
                        >
                            Finalizar Compra
                        </Link>
                    )
            }

        </div>

    );

};

export default ItemCount;