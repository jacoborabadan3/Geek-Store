import { useState, useEffect, useContext } from "react";
import { getProductById } from "../../asyncMoke";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.scss";
import ItemCount from "../ItemCount/ItemCount";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
//CartContext
import { cartContext } from "../../context/CartContext";
//firebase
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    const [quantityToAdd, setQuatityToAdd] = useState(0);

    const { contextValue, addToCart, setContextValue } = useContext(cartContext);

    const cart_Widget = count => {
        setQuatityToAdd(count);
        addToCart(product);
        setContextValue(
            [...contextValue, { ...product, cantidad: count }]
        );
    };

    useEffect(() => {

        const productRef = doc(db, 'Product', productId)

        getDoc(productRef)

            .then(Object => {

                const objectProduct = Object.data();

                const objectProductAdapted = { id: Object.id, ...objectProduct };

                setProduct(objectProductAdapted);

            })

            .finally(() => {
                setLoading(false)
            });


    }, [productId]);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    };

    const { stock } = product

    return (
        <>
            <NavBar />
            <div className="contenedor section">
                <Link to={'/producto'}
                    style={{
                        color: 'black',
                        fontWeight: '300',
                        fontSize: '2rem'
                    }}>
                    Volver a Productos
                </Link>
            </div>
            <main className="contenedor section mainContainerItem">
                <section className="containerItem">
                    <picture className="itemImage">
                        <img src={product.img} />
                    </picture>
                    <div className="itemContent">
                        <h2>{product.title}</h2>
                        <h2>${product.precio}</h2>
                        <h2>Stock:{product.stock}</h2>
                        <ItemCount initial={1} stock={stock} onAdd={cart_Widget} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default ItemDetailContainer;