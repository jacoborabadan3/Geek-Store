import "./ItemCount.scss";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContext";
import { Link, useParams } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
//firebase
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

/** Componente : */
const ItemCount = ({ stock, initial, onAdd }) => {

    const { productId } = useParams();

    const [productItem, setProductItem] = useState({});


    useEffect(() => {

        const productRef = doc(db, 'Product', productId);

        getDoc(productRef)

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
                    <FaMinus />
                </button>
                <h2 className="numberCount">{count}</h2>
                <button className="btnSymbol"
                    onClick={() => increment()}>
                    <FaPlus />
                </button>
            </section>
            {
                !isInCart(productItem.id) ?
                    <button
                        className="carrito-btn"
                        onClick={() => onAdd(count)}>
                        Agregar al carrito
                    </button>
                    :
                    <Link
                        to={'/cartItems'}
                        className="btn-Purchase"
                    >
                        Finalizar Compra
                    </Link>
            }

        </div>

    );

};

export default ItemCount;