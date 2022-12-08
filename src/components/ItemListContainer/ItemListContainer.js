import "./ItemListContainer.scss"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProduct } from "../../asyncMoke";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";

/** Componente: */
const ItemListContainer = ({ greeting }) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true)
        getProduct()
            .then((response) => {
                setProduct(response)
            }).finally(() => {
                setLoading(false)
            })

    }, [])

    if (loading) {
        return <Loading />
    }

    console.log(product);

    return (
        <>
            <NavBar />
            <main className="contenedor section mainCards">
                <ItemList producto={product} />
            </main>
        </>
    );
};

export default ItemListContainer;