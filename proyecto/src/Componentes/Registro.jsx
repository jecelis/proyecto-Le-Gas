import React, { useState, useRef } from "react";
import imag1 from "../images/imag1.png";
import ojo from "../images/ojo.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Registro = () => {
  const [txtcedula, setTxtcedula] = useState("");
  const [txtpsw, setTxtpsw] = useState("");
  const [txtnom, setTxtnom] = useState("");
  const [txtemail, setTxtemail] = useState("");
  const [txtplaca1, setTtxtplaca1] = useState("");
  const [txtplaca2, setTtxtplaca2] = useState("");

  const [error, setError] = useState();
  const [msgError, setmsgError] = useState();

  const cambiarcedula = (e) => {
    setTxtcedula(e.target.value);
  };
  const cambiarpas = (e) => {
    setTxtpsw(e.target.value);
  };
  const cambiarnombre = (e) => {
    setTxtnom(e.target.value);
  };
  const cambiaremail = (e) => {
    setTxtemail(e.target.value);
  };
  const cambiarplaca1 = (e) => {
    setTtxtplaca1(e.target.value);
  };
  const cambiarplaca2 = (e) => {
    setTtxtplaca2(e.target.value);
  };

  const documento = useRef();
  const contr = useRef();
  const nom = useRef();
  const correo = useRef();
  const plac1 = useRef();
  const plac2 = useRef();

  function Enviar() {
    const cedula = documento.current.value;
    const clave = contr.current.value;
    const nombre = nom.current.value;
    const email = correo.current.value;
    const placa1 = plac1.current.value;
    const placa2 = plac2.current.value;
    const saldo = 10000;

    fetch("http://localhost:8081/guardar", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cedula,
        clave,
        nombre,
        email,
        placa1,
        placa2,
        saldo,
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
              <h1 className="text-sm-end fs-1"> Registro a Le Gas</h1>
            </div>
            <div className="flex-shrink-1">
              <img src={imag1} className="image2" alt="imag2" />
            </div>
          </div>
          <form action="" className="" method="POST">
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Nombre</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtnom"
                  name="nombre"
                  required
                  minlength="8"
                  maxlength="40"
                  value={txtnom}
                  ref={nom}
                  onChange={(evento) => {
                    cambiarnombre(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtnom">
                  Indique su nombre
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="email"
                  id="txtemail"
                  name="txtemail"
                  required
                  minlength="8"
                  maxlength="40"
                  value={txtemail}
                  ref={correo}
                  onChange={(evento) => {
                    cambiaremail(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtemail">
                  Indique su correo electronico
                </label>
              </div>
            </div>
            <div className="row m-3 ">
              <label className="col-sm-2 col-form-label">Cedula</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtcedula"
                  name="document"
                  required
                  minlength="8"
                  maxlength="40"
                  value={txtcedula}
                  ref={documento}
                  onChange={(evento) => {
                    cambiarcedula(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtcedula">
                  # documento de identidad
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Clave</label>
              <div className="col-sm-3 form-floating">
                <input
                  className="form-control"
                  type="password"
                  id="txtpsw"
                  name="contraseña"
                  required
                  minlength="6"
                  value={txtpsw}
                  ref={contr}
                  onChange={(evento) => {
                    cambiarpas(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtpsw">
                  Indique su contraseña
                </label>
              </div>
              <div className="col-sm-1">
                <img src={ojo} className="image3 mt-3" alt="ver" />
              </div>
            </div>
            <div className="row m-3 ">
              <label className="col-sm-2 col-form-label">Placa 1</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtplaca1"
                  name="placa1"
                  required
                  minlength="6"
                  maxlength="40"
                  value={txtplaca1}
                  ref={plac1}
                  onChange={(evento) => {
                    cambiarplaca1(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplaca1">
                  Indique la placa de su vehiculo
                </label>
              </div>
              <label className="col-sm-2 col-form-label">Placa 2</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtplaca2"
                  name="placa2"
                  minlength="6"
                  maxlength="40"
                  value={txtplaca2}
                  ref={plac2}
                  onChange={(evento) => {
                    cambiarplaca2(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplaca2">
                  Indique la placa de su vehiculo
                </label>
              </div>
            </div>
            <div className="row m-3">
              <label className="col-sm-2 col-form-label">Saldo</label>
              <div className="col-sm-4 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtplaca3"
                  name="saldo"
                  required
                  minlength="6"
                  maxlength="40"
                  oncopy="return false;"
                  disabled
                  value=""
                  readonly
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplaca3">
                  Su saldo actual es de:
                </label>
              </div>
            </div>
            <div className="row m-3">
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheck"
                />
                <label className="form-check-label" for="flexCheck">
                  Declaro haber leido y aceptado las condiciones generales del
                  programa y la normatividad vigente sobre tratamiento de datos
                  personales
                </label>
              </div>
            </div>
            <div className="position-absolute top-70 start-50 translate-middle mt-4">
              <button
                className="btn butt m-3"
                type="submit"
                name="botonEnviar"
                onClick={Enviar}
              >
                Enviar
              </button>
              <Link to="/Ingresar">
                <button
                  className="btn butt m-3"
                  type="submit"
                  name="botonCancelar"
                >
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
