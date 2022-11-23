import "./NavBar.scss"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (

        <nav className="Nav">
            <div className="contenedor nav">
                {/* logo */}
                <section className="nav__logo">
                    <div className="cubo">
                        <div className="f f-up">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="f f-down">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="f f-right">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="f f-left">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="f f-front">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                        <div className="f f-back">
                            <div className="grids">
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                                <div className="grid"></div>
                            </div>
                        </div>
                    </div>
                    <h1>Geek Store</h1>
                </section>
                {/* navegación */}
                <ul className="nav__items">
                    <div className="nav__items-ul">
                        <li className="nav-li">
                            <a className="nav-a" href="#">Nosotros</a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="#">Productos</a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="#">Contacto</a>
                        </li>
                    </div>
                    <CartWidget />
                </ul>
            </div>
        </nav>

    );

};

export default NavBar;