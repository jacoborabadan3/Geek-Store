import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./MainPage.scss";
import { FaTruckMoving } from "react-icons/fa"
import { FaHeadset } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"

const MainPage = () => {

    return (
        <main className="mainPage">
            <NavBar />

            <div className="banners"></div>

            <div className="contenedor section banner-2">
                <div className="banner-2__content">
                    <h2>Somos la tienda de cubos de rubik en México con la mejor variedad online.<br /><br />Armar el cubo de rubik será tu mejor anti estres.</h2>
                    <Link className="btn-MainPage" to={'/producto'}>Ir a Tienda</Link>
                </div>
            </div>

            <div className="envios contenedor section">

                <div className="envios__item">
                    <FaTruckMoving className="iconMain" />
                    <div className="envios__item__text">
                        <p>Envios a Todo México</p>
                        <p>Enviamos tus cubos a tu casa</p>
                    </div>
                </div>

                <div className="envios__item">
                    <FaHeadset className="iconMain" />
                    <div className="envios__item__text">
                        <p>Atención al cliente</p>
                        <p>Atención al cliente 24/7</p>
                    </div>
                </div>

                <div className="envios__item">
                    <FaPhoneAlt className="iconMain" />
                    <div className="envios__item__text">
                        <p>¿Dudas y preguntas?</p>
                        <p>Llamanos al 5584665885</p>
                    </div>
                </div>

                <div className="envios__item">
                    <FaDollarSign className="iconMain" />
                    <div className="envios__item__text">
                        <p>Productos garantizados</p>
                        <p>Por defecto de fabrica o errores</p>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default MainPage;