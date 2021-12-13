import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Informacion = () => {
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
            <a className="navbar-brand active" href="/Disponibilidad">
              Disponibilidad
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
          <div className="m-2 p-2">
            <h1 className="text-sm-center fs-1">Información Usuarios</h1>
          </div>
          <form action="" className="m-3" method="GET">
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Documento</label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtdoc"
                  name="txtdoc"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtdoc">
                  El numero del documento del usuario es:
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Usuario</label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtusr"
                  name="txtusr"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtusr">
                  El nombre del usuario es:
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">
                Saldo actual ($)
              </label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtsdo"
                  name="txtsdo"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtsdo">
                  El saldo del usuario es:
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">
                Correo electronico
              </label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="email"
                  id="txtcorr"
                  name="txtcorr"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtcorr">
                  El email del usuario es:
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Placa 1</label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtplc"
                  name="txtplc"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplc">
                  La placa registrada del usuario es:
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Placa 2</label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtplc2"
                  name="txtplc2"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplc2">
                  La placa registrada del usuario es:
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Placa 3</label>
              <div className="col-sm-10 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtplc3"
                  name="txtplc3"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplc3">
                  La placa registrada del usuario es:
                </label>
              </div>
            </div>
            <div className="position-absolute top-70 start-50 translate-middle mt-4">
              <button
                className="btn butt m-3"
                type="submit"
                name="botonHbilitar"
              >
                Habilitar
              </button>
              <button
                className="btn butt m-3"
                type="submit"
                name="botonInhabilitar"
              >
                Inhabilitar
              </button>
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
