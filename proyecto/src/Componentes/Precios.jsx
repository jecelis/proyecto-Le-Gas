import React, { useEffect } from "react";
import log from "../images/log.png";
import imag1 from "../images/imag1.png";
import ojo from "../images/ojo.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Precios = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="/">
              Home
            </a>
            <a className="navbar-brand active" href="/Disponibilidad">
              Disponibilidad
            </a>
            <a className="navbar-brand active" href="/Tanquear">
              Tanquear
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
              <h1 className="text-sm-end fs-1"> Precios Le Gas</h1>
            </div>
            <div className="flex-shrink-1">
              <img src={imag1} className="image2" alt="imag2" />
            </div>
          </div>
          <form action="" className="" method="POST">
            {/* <div className="row m-3">
              <label className="col-sm-2 col-form-label">Fecha Inicial</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="date"
                  id="txtfechaI"
                  name="fechaInicial"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtfechaI">
                  Seleccione fecha
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Fecha Final</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="date"
                  id="txtfechaF"
                  name="fechaFinal"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtfechaF">
                  Seleccione fecha
                </label>
              </div>
            </div> */}
            <div className="row m-3 ">
              <label className="col-sm-3 col-form-label">
                Gasolina Corriente
              </label>
              <div className="col-sm-9 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtgcor"
                  name="gasolinac"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtgcor">
                  precio (COP)
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <br />
              <hr />
              <br />
            </div>
            {/* <div className="row m-3">
              <label className="col-sm-2 col-form-label">Fecha Inicial</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="date"
                  id="txtfecha"
                  name="fechaInicial"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtfecha">
                  Seleccione fecha
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Fecha Final</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="date"
                  id="txtfechaf"
                  name="fechaFinal"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtfechaf">
                  Seleccione fecha
                </label>
              </div>
            </div> */}
            <div className="row m-3 ">
              <label className="col-sm-3 col-form-label">Gasolina Extra</label>
              <div className="col-sm-9 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtgext"
                  name="gasolinae"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtgext">
                  precio (COP)
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <br />
              <hr />
              <br />
            </div>
            <div className="row m-3 ">
              <label className="col-sm-3 col-form-label">Diesel</label>
              <div className="col-sm-9 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtdiesel"
                  name="gasolinad"
                  required
                />
                <label className="text-sm-start lh-sm ms-2" for="txtdiesel">
                  precio (COP)
                </label>
              </div>
            </div>
            <div className="position-absolute top-70 start-50 translate-middle mt-4">
              <button
                className="btn butt m-3"
                type="submit"
                name="botonGuardar"
              >
                Guardar
              </button>
              <Link to="/Ingresar">
                <button
                  className="btn butt m-3"
                  type="submit"
                  name="botonCencelar1"
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
