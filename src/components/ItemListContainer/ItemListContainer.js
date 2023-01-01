import "./ItemListContainer.scss"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
//firebase
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

/** Componente: */
const ItemListContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { filterProduct } = useParams();

    useEffect(() => {
        setLoading(true)

        const productCollection = filterProduct
            ? query(collection(db, 'Product'), where('category', '==', filterProduct))
            : collection(db, 'Product')

        getDocs(productCollection)
            .then(Response => {

                const productAdapted = Response.docs.map(doc => {

                    const objectAdapted = doc.data();

                    return { id: doc.id, ...objectAdapted };

                });

                setProduct(productAdapted);
            })
            .finally(() => setLoading(false))

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