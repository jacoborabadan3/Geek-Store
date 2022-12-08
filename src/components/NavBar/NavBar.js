import "./NavBar.scss"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="Nav">
            <div className="contenedor nav">
                {/* logo */}
                <section className="nav__logo">
                    <Link to={'/'}>
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
                    </Link>
                    <h1>Cube Store</h1>
                </section>
                {/* navegación */}
                <ul className="nav__items">
                    <div className="nav__items-ul">
                        <NavLink
                            to={'/nosotros'}
                            className={({ isActive }) => isActive ? 'activeOption' : 'navLink'}>
                            Nosotros
                        </NavLink>
                        <NavLink
                            to={'/producto'}
                            className={({ isActive }) => isActive ? 'activeOption' : 'navLink'}>
                            Productos
                        </NavLink>
                        <NavLink
                            to={'/contacto'}
                            className={({ isActive }) => isActive ? 'activeOption' : 'navLink'}>
                            Contacto
                        </NavLink>
                    </div>
                    <CartWidget number={0} />
                </ul>
            </div>
        </nav>

    );

};

export default NavBar;