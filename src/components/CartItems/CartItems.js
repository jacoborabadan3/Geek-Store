import "./CartItems.scss";
import NavBar from "../NavBar/NavBar";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartItems = () => {

    const { contextValue, removeItem, finalPrice } = useContext(cartContext);

    const precioFinal = finalPrice();

    let colorsPurchase = 'colorsPurchase';

    return (
        <>
            <NavBar colorsPurchaseStyle={colorsPurchase} />
            {
                contextValue.length === 0 ?
                    <main className="contenedor mainNoItemCarts">
                        <h1 className="section">Lo sentimos, aun no has añadido productos . . . .</h1>
                        <Link to={'/producto'}>Ir a la Tienda</Link>
                    </main> :
                    <main className="mainItemCarts contenedor section">

                        <table className="contenedor section">
                            <caption className="section">Has añadido los siguientes productos:</caption>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contextValue.map(element => {
                                        return (
                                            <tr>
                                                <td className="tdFlex">
                                                    <div className="tdFlex">
                                                        <picture>
                                                            <img src={element.img} />
                                                        </picture>
                                                        <h4>{element.title}</h4>
                                                    </div>
                                                    <button onClick={() => removeItem(element.id)}>
                                                        <FaTrashAlt className="btn-Trash" />
                                                    </button>
                                                </td>
                                                <td>${element.precio}</td>
                                                <td>{element.cantidad}</td>
                                                <td>${element.precio * element.cantidad}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="contenedor section">
                            <div className="tablePurchase">
                                <h1>Total: ${precioFinal}</h1>
                                <Link to={'/checkout'}>Finalizar Compra</Link>
                            </div>
                        </div>
                    </main>
            }
        </>
    );

};

export default CartItems;