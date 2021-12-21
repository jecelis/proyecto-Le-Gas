import React, { useState, useRef } from "react";
import imag1 from "../images/imag1.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Gestion = () => {
  const [txtgcor, setTtxtgcor] = useState("");
  const [txtstock, setTtxtstock] = useState("");
  const [txtgext, setTtxtgext] = useState("");
  const [txtstocke, setTtxtstocke] = useState("");
  const [txtdiesel, setTtxtdiesel] = useState("");
  const [txtstockd, setTtxtstockd] = useState("");
  const [alerta, setAlerta] = useState(false);

  const [error, setError] = useState();
  const [msgError, setmsgError] = useState();

  const gasCte = (e) => {
    setTtxtgcor(e.target.value);
  };
  const stockCte = (e) => {
    setTtxtstock(e.target.value);
  };
  const gasExt = (e) => {
    setTtxtgext(e.target.value);
  };
  const stockExt = (e) => {
    setTtxtstocke(e.target.value);
  };
  const gasDiesel = (e) => {
    setTtxtdiesel(e.target.value);
  };
  const stockDiesel = (e) => {
    setTtxtstockd(e.target.value);
  };

  const gasCt = useRef();
  const stockCt = useRef();
  const gasEx = useRef();
  const stockEx = useRef();
  const gasDi = useRef();
  const stockDi = useRef();

  function Precios() {
    const precioCte = gasCt.current.value;
    const precioExtra = gasEx.current.value;
    const precioDiesel = gasDi.current.value;
    const stockCte = stockCt.current.value;
    const stockExtra = stockEx.current.value;
    const stockDiesel = stockDi.current.value;

    fetch("http://localhost:8081/Gestion", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        precioCte,
        precioExtra,
        precioDiesel,
        stockCte,
        stockExtra,
        stockDiesel,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.estado === "Ok") {
          {
            setError(true);
            setmsgError(res.msg);
            {
              window.location.href = "/Ingresar";
            }
          }
        } else {
          setError(true);
          setmsgError(res.msg);
        }
      });

    gasCt.current.value = "";
    gasEx.current.value = "";
    gasDi.current.value = "";
    stockCt.current.value = "";
    stockEx.current.value = "";
    stockDi.current.value = "";

    setAlerta(true);
    setTimeout(() => setAlerta(false), 3000);
  }

  return (
    <>
      <header>
        {error && (
          <div role="alert" className="alert alert-danger">
            {msgError}
          </div>
        )}
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
              <h1 className="text-sm-end fs-1"> Gestión Le Gas</h1>
            </div>
            <div className="flex-shrink-1">
              <img src={imag1} className="image2" alt="imag2" />
            </div>
          </div>
          <form action="" className="" method="POST">
            <div className="row m-3 ">
              <label className="col-sm-2 col-form-label">
                Gasolina Corriente
              </label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtgcor"
                  name="gasolinac"
                  required
                  ref={gasCt}
                  value={txtgcor}
                  onChange={(evento) => {
                    gasCte(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtgcor">
                  precio (COP)
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Stock (galón)</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtstock"
                  name="StockGc"
                  value={txtstock}
                  ref={stockCt}
                  onChange={(evento) => {
                    stockCte(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtstock">
                  cantidad de galones:
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <br />
              <hr />
              <br />
            </div>
            <div className="row m-3 ">
              <label className="col-sm-2 col-form-label">Gasolina Extra</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtgext"
                  name="gasolinae"
                  required
                  ref={gasEx}
                  value={txtgext}
                  onChange={(evento) => {
                    gasExt(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtgext">
                  precio (COP)
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Stock (galón)</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtstocke"
                  name="StockGe"
                  required
                  ref={stockEx}
                  value={txtstocke}
                  onChange={(evento) => {
                    stockExt(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtstocke">
                  Cantidad de galones
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <br />
              <hr />
              <br />
            </div>
            <div className="row m-3 ">
              <label className="col-sm-2 col-form-label">Diesel</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtdiesel"
                  name="gasolinad"
                  required
                  ref={gasDi}
                  value={txtdiesel}
                  onChange={(evento) => {
                    gasDiesel(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtdiesel">
                  precio (COP)
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Stock (galón)</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtstockd"
                  name="StockDi"
                  required
                  ref={stockDi}
                  value={txtstockd}
                  onChange={(evento) => {
                    stockDiesel(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtstockd">
                  Cantidad de galones:
                </label>
              </div>
            </div>
            <div className="position-absolute top-70 start-50 translate-middle mt-4">
              <button
                className="btn butt m-3"
                type="submit"
                name="botonGuardar"
                onClick={Precios}
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
