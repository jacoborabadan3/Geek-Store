import { Link } from "react-router-dom";
import "./MainPage.scss";

const MainPage = () => {
    return (
        <main className="mainPage">
            <section className="contenedor contentPage">
                <h1 className="textCenter"
                    style={{
                        color: 'white',
                        paddingTop: '4rem'
                    }}>
                    Cube Store
                </h1>
                <Link
                    to={'/producto'}
                    className='linkMainPage'>
                    <button>Comprar</button>
                </Link>
            </section>
        </main>
    );
};

export default MainPage;