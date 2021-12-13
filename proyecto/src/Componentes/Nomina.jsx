import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export const Nomina = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="/">
              Home
            </a>
            <a className="navbar-brand active" href="/Permisos">
              Permisos
            </a>
            <a className="navbar-brand active" href="/Disponibilidad">
              Disponibilidad
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
          <div className="m-2 p-2">
            <h1 className="text-sm-center fs-1"> Nomina</h1>
          </div>
          <div className="table-responsive-sm">
            <table className="table table-bordered bord">
              <thead>
                <tr className="text-center text-sm">
                  <th scope="col">#</th>
                  <th scope="col">ID Empleado</th>
                  <th scope="col">Nombre empleado</th>
                  <th scope="col">Cargo</th>
                  <th scope="col">Salario (USD)</th>
                  <th scope="col">Perfil</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <th scope="row">1</th>
                  <td>1026258047</td>
                  <td>John Lopez</td>
                  <td>Ingeniero</td>
                  <td>1.500</td>
                  <td>U. Interno</td>
                </tr>
                <tr className="text-center">
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <th scope="row">3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <th scope="row">4</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <th scope="row">5</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
            <p className="ms-3 tama">*Usted tiene permisos como administrador</p>
        </div>
      </main>
    </>
  );
};
