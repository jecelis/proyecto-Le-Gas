import React, { useEffect } from "react";
import log from "../images/log.png";
import imag1 from "../images/imag1.png";
import ojo from "../images/ojo.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Disponibilidad = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="/">
              Home
            </a>
            <a className="navbar-brand active" href="/Precios">
              Precios
            </a>
            <a className="navbar-brand active" href="/Tanqueo">
              Tanqueo
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
              <h1 className="text-sm-end fs-1"> Disponibilidad Le Gas</h1>
            </div>
            <div className="flex-shrink-1">
              <img src={imag1} className="image2" alt="imag2" />
            </div>
          </div>
          <form action="" className="" method="POST">
            <div className="row m-3 ">
              <label className="col-sm-3 col-form-label">
                Gasolina Corriente
              </label>
            </div>
            <div className="row m-3">
              <label className="col-sm-4 col-form-label">
                Inventario Inicial (galón)
              </label>
              <div className="col-sm-8 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtinv"
                  name="inventarioI"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtinv">
                  Indique la cantidad de galones
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-4 col-form-label">
                Stock actual (galón)
              </label>
              <div className="col-sm-8 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtstock"
                  name="StockGc"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtstock">
                  La cantidad de galones existentes son
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <br />
              <hr />
              <br />
            </div>
            <div className="row m-3 ">
              <label className="col-sm-3 col-form-label">Gasolina Extra</label>
            </div>
            <div className="row m-3">
              <label className="col-sm-4 col-form-label">
                Inventario Inicial (galón)
              </label>
              <div className="col-sm-8 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtinve"
                  name="inventarioIe"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtinv">
                  Indique la cantidad de galones
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-4 col-form-label">
                Stock actual (galón)
              </label>
              <div className="col-sm-8 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtstocke"
                  name="StockGe"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtstocke">
                  La cantidad de galones existentes son
                </label>
              </div>
            </div>
            <div className="position-absolute top-70 start-50 translate-middle mt-4">
              <button
                className="btn butt m-3"
                type="submit"
                name="botonGuardarD"
              >
                Guardar
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
            <p className="tama">*Usted esta como usuario interno</p>
          </div>
        </div>
      </main>
    </>
  );
};
