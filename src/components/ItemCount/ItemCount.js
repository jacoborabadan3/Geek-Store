import "./ItemCount.scss";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMoke";
import { valueContext } from "../../App";

/** Componente : */
const ItemCount = ({ stock, initial, onAdd }) => {

    const { productId } = useParams();

    const [count, setCount] = useState(initial);

    const [newObject, setNewObject] = useState({});

    const { title } = newObject

    const { contextValue, setContextValue } = useContext(valueContext);

    const isInCart = (id) => contextValue.some(item => item.title === id);

    const addToCart = (title) => !isInCart(title) ? setContextValue([...contextValue, newObject]) : null

    useEffect(() => {
        getProductById(productId)
            .then(Response => setNewObject(Response))
    }, []);

    console.log(isInCart(title));

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
            {!isInCart(title) ?
                (<button className="carrito-btn" onClick={() => addToCart(title)}>Agregar al carrito</button>) :
                (<button>Finalizar Compra</button>)}
        </div>

    );

};

export default ItemCount;