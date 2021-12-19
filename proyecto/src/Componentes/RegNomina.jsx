import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const RegNomina = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="Home">
              Home
            </a>
            <a className="navbar-brand active" href="Nomina">
              Nomina
            </a>
            <a className="navbar-brand active" href="Gestion">
              Gestion
            </a>
            <a className="navbar-brand active" href="Tanquear">
              Tanquear
            </a>
            <a className="navbar-brand active" href="Contactenos">
              Contactenos
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="container-fluid">
          <div className="m-2 p-2">
            <h1 className="text-sm-center fs-1 p-3">
              {" "}
              Registro Empleados Le Gas
            </h1>
          </div>
          <form action="">
            <div className="row">
              <div className="col-sm-2">
                <label className="text-sm-start  ms-2" for="txtpsw">
                  Indique su contraseña
                </label>
              </div>
              <div className="col-sm-8 form-floating ">
                <input
                  className="form-control"
                  type="password"
                  id="txtpsw"
                  name="contraseña"
                  required
                  minlength="8"
                />
                <label className="text-sm-start  ms-2 " for="txtpsw">
                  Indique su contraseña
                </label>
              </div>
              <div className="m-2 p-4">
                <label className="text-sm-start  m-2 " for="txtpsw">
                  Autorización
                </label>
                <label className=" form-check-label m-2" for="flexCheck">
                  Admon
                </label>
                <input
                  className=" form-check-input m-2"
                  type="checkbox"
                  value=""
                  id="flexCheck"
                />
                <label className="form-check-label m-2" for="flexCheck">
                  Usuario Externo
                </label>
                <input
                  className=" form-check-input m-2"
                  type="checkbox"
                  value=""
                  id="flexCheck"
                />
                <label className="form-check-label m-2" for="flexCheck">
                  Borrar
                </label>
                <input
                  className=" form-check-input m-2"
                  type="checkbox"
                  value=""
                  id="flexCheck"
                />
              </div>
              <div>
                <div className="col text-center p-3 m-3">
                  <button
                    className="btn butt  col-3 "
                    type="submit"
                    name="botonEnviar"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
