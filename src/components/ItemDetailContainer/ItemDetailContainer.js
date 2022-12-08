import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMoke";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.scss";
import ItemCount from "../ItemCount/ItemCount";
import { callback } from "../Item/Item";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(Response => setProduct(Response))
            .finally(() => {
                setLoading(false)
            })
    }, []);

    console.log(product);

    if (loading) {
        return <Loading />
    };

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
                        <ItemCount initial={0} stock={10} onAdd={callback} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default ItemDetailContainer;