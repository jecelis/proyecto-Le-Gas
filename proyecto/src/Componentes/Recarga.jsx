import React, { useEffect } from "react";
import imag1 from "../images/imag1.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Recarga = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="/">
              Home
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
              <h1 className="text-sm-end fs-1"> Recarga Le Gas</h1>
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
                  id="txtsald1"
                  name="saldo1"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtsald1">
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
              <label className="col-sm-2 col-form-label">
                Valor a recargar
              </label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtrecarga"
                  name="recarga"
                />
                <label className="text-sm-start lh-sm ms-2" for="txtrecarga">
                  Ingrese el valor de la recarga:
                </label>
              </div>
            </div>

            <div className="row m-3 ">
              <label className="col-sm-12 col-form-label">Forma de pago:</label>
            </div>

            <div className="row m-2 ">
              <div className="form-check col-sm-2 ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheck1"
                />
                <label className="form-check-label" for="flexCheck1">
                  T. Credito
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
                  T. Debito
                </label>
              </div>
              <div className="form-check col-sm-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheck3"
                />
                <label className="form-check-label" for="flexCheck3">
                  Transf. Bancaria
                </label>
              </div>
            </div>

            <div className="position-absolute top-70 start-50 translate-middle mt-4">
              <button className="btn butt m-3" type="submit" name="botonPagar">
                Pagar
              </button>
              <Link to="/Ingresar">
                <button
                  className="btn butt m-3"
                  type="submit"
                  name="botonCencelarP"
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
