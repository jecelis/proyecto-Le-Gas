import React, { useEffect, useState } from "react";
import imag1 from "../images/imag1.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Tanquear = () => {
  const [txtcant1, setTxtcant1] = useState("");
  const [txtsald, setTxtsald] = useState("");
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="/">
              Home
            </a>
            <a className="navbar-brand active" href="/Gestion">
              Gestion
            </a>
            <a className="navbar-brand active" href="/Recarga">
              Recarga
            </a>
            <a className="navbar-brand active" href="/Historial">
              Historial Usuario
            </a>
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
              <h1 className="text-sm-end fs-1"> Tanquear Le Gas</h1>
            </div>
            <div className="flex-shrink-1">
              <img src={imag1} className="image2" alt="imag2" />
            </div>
          </div>
          <form action="" className="" method="POST">
            <div className="row m-3">
              <label className="col-sm-3 col-form-label">
                Saldo actual (COP)
              </label>
              <div className="col-sm-6 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtsald"
                  name="sald"
                  oncopy="return false;"
                  disabled
                  value={txtsald}
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtsald">
                  El saldo actual del usuario es
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <br />
              <hr />
              <br />
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">P. Extra (COP)</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtprece"
                  name="precioextra"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtprece">
                  El precio actual es:
                </label>
              </div>
              <label className="col-sm-2 col-form-label">
                P. corriente (COP)
              </label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtprecc"
                  name="preciocorriente"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtprecc">
                  El precio actual es:
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <label className="col-sm-5 col-form-label">
                Tipo de gasolina a tanquear:
              </label>
              <div className="form-check col-sm-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheck1"
                />
                <label className="form-check-label" for="flexCheck1">
                  Extra
                </label>
              </div>
              <div className="form-check col-sm-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheck2"
                />
                <label className="form-check-label" for="flexCheck2">
                  Corriente
                </label>
              </div>
            </div>

            <div className="row m-3">
              <label className="col-sm-4 col-form-label">
                Cantidad (galón)
              </label>
              <div className="col-sm-8 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtcant1"
                  name="cantGalon"
                  value={txtcant1}
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtcant1">
                  Indique la cantidad de galones
                </label>
              </div>
            </div>

            <div className="position-absolute top-70 start-50 translate-middle mt-4">
              <button
                className="btn butt m-3"
                type="submit"
                name="botonTanquear1"
              >
                Tanquear
              </button>
              <Link to="/Ingresar">
                <button
                  className="btn butt m-3"
                  type="submit"
                  name="botonCencelarD"
                >
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
          <div className="marl">
            <p className="tama">*Usted esta como usuario externo</p>
          </div>
        </div>
      </main>
    </>
  );
};
