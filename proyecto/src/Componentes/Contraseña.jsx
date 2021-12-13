import React, { useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export const Contrasena = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light colornav">
                    <div className="container-fluid">
                        <a className="navbar-brand active" href="/">Home</a>
                        <a className="navbar-brand active" href="/Contactenos">Contactenos</a>
                    </div>
                </nav>
            </header>
            <main>
                <div className="container-fluid">
                    <div className="m-2 p-2">
                        <h1 className="text-sm-center fs-1"> Recuperar Contraseña</h1>
                    </div>
                    <form action="" className="m-3" method="POST">
                        <p className="text-center m-3"> Señor(a) usuario, para recuperar su contraseña por favor digite
                            su correo registrado
                        </p>
                        <div className="row m-3">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10 form-floating">
                                <input className="form-control" type="email" id="txtemail2" name="email2" required minlength="8" maxlength="40" />
                                <label className="text-sm-start lh-sm ms-2" for="txtemail2">Indique su correo electronico</label>
                            </div>
                        </div>
                        <div className="position-absolute top-70 start-50 translate-middle mt-4">
                            <button className="btn butt m-3" type="submit" name="botonEnviar2">Enviar</button>
                            <Link to="/Ingresar">
                                <button className="btn butt m-3" type="submit" name="botonCencelar2">Cancelar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

