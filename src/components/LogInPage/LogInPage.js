import "./LogInPage.scss"
import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Swal from "sweetalert2"


const LogInPage = () => {

    const [username, setUserName] = useState('')

    const [password, setPassword] = useState('')

    const { user, logOut, logIn } = useContext(AuthContext)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            Swal.fire('Los campos son obligatorios')
        } else { logIn({ username, password }) }
    }

    if (user) {
        return (
            <>
                <NavBar />
                <div className="contenedor section">
                    <button onClick={() => logOut()}>Cerrar sesión</button>
                    <Link to={'/checkout'}>Finalizar Compra</Link>
                </div>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <main className="contenedor section">
                <h1 className="textCenter">Inicia Sesión</h1>

                <div className="mainForm">
                    <form className="containerForm" onSubmit={handleOnSubmit}>
                        <div className="itemsForm">
                            <div className="itemForm">
                                <label>Nombre de Usuario o Email*</label>
                                <input value={username} type={'text'} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="itemForm">
                                <label>Contraseña*</label>
                                <input value={password} type={'password'} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type={'submit'} value={'Iniciar Sesión'} />
                        </div>
                    </form>
                </div>
            </main>
        </>

    )

}

export default LogInPage