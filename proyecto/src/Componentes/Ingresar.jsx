import React, { useState, useEffect } from "react";
import log from "../images/log.png";
import ojo from "../images/ojo.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Ingresar = () => {
  const [txtusr, setTxtusr] = useState("");
  const [txtpsw, setTtxtpsw] = useState("");
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="/">
              Home
            </a>
            <a className="navbar-brand active" href="/Registro">
              Registrarse
            </a>
            {/*             <a className="navbar-brand active" href="/Permisos">
              Admon
            </a>
            <a className="navbar-brand active" href="/Precios">
              U. Interno
            </a> */}
            <a className="navbar-brand active" href="/Contactenos">
              Contactenos
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 me-1">
              <h1 className="text-sm-end fs-1"> Acceder a Le Gas</h1>
            </div>
            <div className="flex-shrink-1">
              <img src={log} className="image2" alt="log" />
            </div>
          </div>
          <form action="" className="" method="POST">
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Usuario</label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtusr"
                  name="usuario"
                  value={txtusr}
                  required
                  minlength="8"
                  maxlength="40"
                />
                <label className="text-sm-start lh-sm ms-2" for="txtusr">
                  Indique su nombre de usuario
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Clave</label>
              <div className="col-sm-9 form-floating">
                <input
                  className="form-control"
                  type="password"
                  id="txtpsw"
                  name="contraseña"
                  value={txtpsw}
                  required
                  minlength="8"
                />
                <label className="text-sm-start lh-sm ms-2" for="txtpsw">
                  Indique su contraseña
                </label>
              </div>
              <div className="col-sm-1">
                <img src={ojo} className="image3 mt-3" alt="ver" />
              </div>
            </div>
            <div className="position-absolute top-70 start-50 translate-middle marb">
              <Link to="/Tanquear">
                <button
                  className="btn butt m-3"
                  type="submit"
                  name="botonEntrar"
                >
                  Entrar
                </button>
              </Link>
{/*               <Link to="/Registro">
                <button
                  className="btn butt m-3"
                  type="submit"
                  name="botonRegistrar"
                >
                  Registrarse
                </button>
              </Link> */}
            </div>
          </form>
        </div>
      </main>
      <footer>
        <div className="d-flex justify-content-center">
          <a className="marl" href="/Contrasena">
            Recuperar contraseña
          </a>
        </div>
      </footer>
    </>
  );
};
