// estilos
import "./Checkout.scss";
import NavBar from "../NavBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { cartContext } from "../../context/CartContext";
import { addDoc, collection, updateDoc, getDocs, query, where, documentId, writeBatch, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {

    const { user } = useContext(AuthContext)
    const { contextValue, finalPrice, clearCart } = useContext(cartContext)

    const navigate = useNavigate()

    console.log(contextValue);

    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const handleOnSubmit = async (e) => {

        e.preventDefault();

        if (name === '' || email === '' || number === '') {
            Swal.fire('Necesitas llenar todos los campos')
        } else {


            setLoading(true)

            try {

                const objOrder = {
                    buyer: {
                        name: name,
                        email: email,
                        number: number
                    },
                    items: contextValue,
                    total: finalPrice()
                }

                const batch = writeBatch(db)

                const ids = contextValue.map(product => product.id)

                const productRef = query(collection(db, 'Product'), where(documentId(), 'in', ids))

                const productsAddedToCartFromFireBase = await getDocs(productRef)

                const { docs } = productsAddedToCartFromFireBase

                const outOfStock = []

                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const stockDb = dataDoc.stock

                    const productAddedToCart = contextValue.find(product => product.id === doc.id)
                    const productQuantity = productAddedToCart?.cantidad

                    if (stockDb >= productQuantity) {
                        batch.update(doc.ref, { stock: stockDb - productQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })

                if (outOfStock.length === 0) {
                    await batch.commit()

                    const orderRef = collection(db, 'orders')

                    const orderAdded = await addDoc(orderRef, objOrder)

                    clearCart()

                    setTimeout(() => {
                        navigate('/')
                    }, 900);

                    console.log(orderAdded.id);

                } else {
                    console.error('Productos fuera de stock')
                }

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }

        }

    }

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return (
            <>
                <NavBar />
                <div className="section contenedor">
                    <h1 className="textCenter section">Necesitas iniciar sesión para finalizar tu compra ........ </h1>
                    {/* <Link to={'/LogInPage'}>Iniciar Sesión</Link> */}
                </div>
            </>
        )
    };


    return (

        <>
            <NavBar />
            <form className="contenedor section" onSubmit={handleOnSubmit}>
                <fieldset className="formPurchase">
                    <legend>Checkout</legend>
                    <input className="inputCheckout"
                        value={name} type={'text'} placeholder='Nombre' onChange={(e) => setName(e.target.value)} />
                    <input className="inputCheckout"
                        value={email} type={'email'} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                    <input className="inputCheckout"
                        value={number} type={'tel'} placeholder='Teléfono' onChange={(e) => setNumber(e.target.value)} />
                </fieldset>
                <input type={'submit'} value='Confirmar Orden' />
            </form>
        </>
    );

};

export default Checkout;