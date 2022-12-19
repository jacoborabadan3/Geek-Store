import "./ItemListContainer.scss"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProduct, getProductByCategory } from "../../asyncMoke";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

/** Componente: */
const ItemListContainer = ({ greeting }) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { filterProduct } = useParams();

    useEffect(() => {
        setLoading(true)
        if (filterProduct) {
            // getProduct()
            //     .then((response) => {
            //         setProduct(response)
            //     }).finally(() => {
            //         setLoading(false)
            //     })
            getProductByCategory(filterProduct)
                .then((response) => {
                    setProduct(response)
                }).finally(() => {
                    setLoading(false)
                })
        } else {
            // setLoading(true)
            // getProductByCategory(filterProduct)
            //     .then((response) => {
            //         setProduct(response)
            //     }).finally(() => {
            //         setLoading(false)
            //     })
            getProduct()
                .then((response) => {
                    setProduct(response)
                }).finally(() => {
                    setLoading(false)
                })
        }
    }, [filterProduct])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <NavBar />
            <main className="contenedor section mainCards">
                <div className="mainCards__nav section">
                    <nav className="cardsNav">
                        <h1 className="textCenter">Filtra por dificultad :</h1>
                        <div className="cardsNav__links section">
                            <NavLink
                                to={'/producto'}
                                className=
                                {
                                    ({ isActive }) => isActive ?
                                        'linksActive' :
                                        'links'
                                }>
                                Todos los Productos
                            </NavLink>
                            <NavLink
                                className=
                                {
                                    ({ isActive }) => isActive ?
                                        'linksActive' :
                                        'links'
                                }
                                to={'/producto/Principiante'}>
                                Principiante
                            </NavLink>
                            <NavLink
                                className=
                                {
                                    ({ isActive }) => isActive ?
                                        'linksActive' :
                                        'links'
                                }
                                to={'/producto/Intermedio'}>
                                Intermedio
                            </NavLink>
                            <NavLink
                                className=
                                {
                                    ({ isActive }) => isActive ?
                                        'linksActive' :
                                        'links'
                                }
                                to={'/producto/Avanzado'}>
                                Avanzado
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <div className="mainCards__list section">
                    <ItemList producto={product} />
                </div>
            </main>
        </>
    );
};

export default ItemListContainer;