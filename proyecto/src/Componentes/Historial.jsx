import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export const Historial = () => {
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
            <a className="navbar-brand active" href="/Recarga">
              Recarga
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
            <h1 className="text-sm-center fs-1">Historial de movimientos</h1>
          </div>
          <form action="" className="" method="POST">
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">
                Saldo (COP)
              </label>
              <div className="col-sm-6 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtsal"
                  name="sald"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtsal">
                  El saldo actual del usuario es
                </label>
              </div>
            </div>
          </form>  
          <div className="table-responsive-sm">
            <table className="table table-bordered bord">
              <thead>
                <tr className="text-center text-sm">
                  <th scope="col">Fecha</th>
                  <th scope="col">Tipo de gasolina</th>
                  <th scope="col">Cant. Galones</th>
                  <th scope="col">Valor compra($)</th>
                  <th scope="col">Puntos acumulados</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <th scope="row">15/12/2021</th>
                  <td>Extra</td>
                  <td>15</td>
                  <td>50.000</td>
                  <td>40</td>
                </tr>
                <tr className="text-center">
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <th scope="row"></th>
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
            <p className="ms-3 tama">*Usted está como usuario externo</p>
        </div>
      </main>
    </>
  );
};
