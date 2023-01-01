import "./CartWidget.scss";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa"

const CartWidget = () => {

    const { getQuantity } = useContext(cartContext);

    const finalQuantity = getQuantity();

    return (

        <Link to={'/cartItems'}>
            <div className="cartWidget">
                <div>
                    <FaShoppingCart className="cartWidget__icon" />
                </div>
                <div className="cartWidget__count">
                    {finalQuantity}
                </div>
            </div>
        </Link>

    );

};

export default CartWidget;