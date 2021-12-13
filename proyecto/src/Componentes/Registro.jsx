import React, { useEffect } from 'react';
import log from '../images/log.png';
import imag1 from '../images/imag1.png';
import ojo from '../images/ojo.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export const Registro = () => {
    
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
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 me-1">
                            <h1 className="text-sm-end fs-1"> Registro a Le Gas</h1>
                        </div>
                        <div className="flex-shrink-1"> 
                            <img src={imag1} className="image2" alt="imag2"/>
                        </div>    
                    </div>
                    <form action="" className="" method="POST">
                        <div className="row m-3">
                            <label className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-4 form-floating">
                                <input className="form-control" type="text" id="txtnom" name="nombre" required minlength="8" maxlength="40"/>
                                <label className="text-sm-start lh-sm ms-2" for="txtnom">Indique su nombre</label>
                            </div>
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-4 form-floating">
                                <input className="form-control" type="email" id="txtemail" name="txtemail" required minlength="8" maxlength="40"/>
                                <label className="text-sm-start lh-sm ms-2" for="txtemail">Indique su correo electronico</label>
                            </div>
                        </div>
                        <div className="row m-3 ">
                            <label className="col-sm-2 col-form-label">Cedula</label>
                            <div className="col-sm-4 form-floating">
                                <input className="form-control" type="num" id="txtcedula" name="documento" required minlength="8" maxlength="40"/>
                                <label className="text-sm-start lh-sm ms-2" for="txtcedula"># documento de identidad</label>
                            </div>
                            <label className="col-sm-2 col-form-label">Clave</label>
                            <div className="col-sm-3 form-floating">
                                <input className="form-control" type="password" id="txtpsw" name="contraseña"  required minlength="8"/>
                                <label className="text-sm-start lh-sm ms-2" for="txtpsw">Indique su contraseña</label>
                            </div>
                            <div className="col-sm-1">
                                <img src={ojo} className="image3 mt-3" alt="ver"  />
                            </div>
                        </div>
                        <div className="row m-3 ">
                            <label className="col-sm-2 col-form-label">Placa 1</label>
                            <div className="col-sm-4 form-floating">
                                <input className="form-control" type="text" id="txtplaca1" name="placa1" required minlength="6" maxlength="40"/>
                                <label className="text-sm-start lh-sm ms-2" for="txtplaca1">Indique la placa de su vehiculo</label>
                            </div>
                            <label className="col-sm-2 col-form-label">Placa 2</label>
                            <div className="col-sm-4 form-floating">
                                <input className="form-control" type="text" id="txtplaca2" name="placa2" required minlength="6" maxlength="40"/>
                                <label className="text-sm-start lh-sm ms-2" for="txtplaca2">Indique la placa de su vehiculo</label>
                            </div>
                        </div>
                        <div className="row m-3">
                            <label className="col-sm-2 col-form-label">Placa 3</label>
                            <div className="col-sm-4 form-floating">
                                <input className="form-control" type="text" id="txtplaca3" name="placa3" required minlength="6" maxlength="40"/>
                                <label className="text-sm-start lh-sm ms-2" for="txtplaca3">Indique la placa de su vehiculo</label>
                            </div>
                        </div>
                        <div className="row m-3">
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck"/>
                                <label className="form-check-label" for="flexCheck">
                                    Declaro haber leido y aceptado las condiciones generales del programa y la normatividad
                                    vigente sobre tratamiento de datos personales
                                </label>
                            </div>
                        </div>
                        <div className="position-absolute top-70 start-50 translate-middle mt-4">
                            <button className="btn butt m-3" type="submit" name="botonEnviar">Enviar</button>
                            <Link to="/Ingresar">
                                <button className="btn butt m-3" type="submit" name="botonCencelar">Cancelar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

