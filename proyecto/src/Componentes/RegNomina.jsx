import React from "react";
import { useState, useRef } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const RegNomina = () => {
  const [txtcedula, setTxtcedula] = useState("");
  const [txtnom, setTxtnom] = useState("");
  const [txtcargo, setTtxtcargo] = useState("");
  const [txtsalario, setTtxtsalario] = useState("");

  const [alerta, setAlerta] = useState(false);
  const [error, setError] = useState();
  const [msgError, setmsgError] = useState();

  const cambiarcedula = (e) => {
    setTxtcedula(e.target.value);
  };

  const cambiarnombre = (e) => {
    setTxtnom(e.target.value);
  };

  const cambiarcargo = (e) => {
    setTtxtcargo(e.target.value);
  };
  const cambiarsalario = (e) => {
    setTtxtsalario(e.target.value);
  };

  const documento = useRef();
  const nom = useRef();
  const cargo = useRef();
  const salario = useRef();

  function Guardar() {
    const cedula = documento.current.value;
    const nombre = nom.current.value;
    const puesto = cargo.current.value;
    const sueldo = salario.current.value;

    fetch("http://localhost:8081/nomina", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cedula,
        nombre,
        puesto,
        sueldo,
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

  function Consultar() {
    const cedula = documento.current.value;
    const nombre = nom.current.value;
    const puesto = cargo.current.value;
    const sueldo = salario.current.value;

    fetch("http://localhost:8081/consultar", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cedula,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        nom.current.value = res.dato.nombre;
        cargo.current.value = res.dato.puesto;
        salario.current.value = res.dato.sueldo;
      });
  }

  function Actualizar() {
    const cedula = documento.current.value;
    const nombre = nom.current.value;
    const puesto = cargo.current.value;
    const sueldo = salario.current.value;

    fetch("http://localhost:8081/actualizar", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cedula,
        nombre,
        puesto,
        sueldo,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.estado === "Ok") {
          {
            setError(true);
            setmsgError(res.msg);
          }
        } else {
          setError(true);
          setmsgError(res.msg);
        }
      });

    documento.current.value = "";
    nom.current.value = "";
    cargo.current.value = "";
    salario.current.value = "";

    setAlerta(true);
    setTimeout(() => setAlerta(false), 3000);
  }

  function Eliminar() {
    const cedula = documento.current.value;

    fetch("http://localhost:8081/eliminar", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cedula,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.estado === "Ok") {
          {
            setError(true);
            setmsgError(res.msg);
          }
        } else {
          setError(true);
          setmsgError(res.msg);
        }
      });

    documento.current.value = "";
    nom.current.value = "";
    cargo.current.value = "";
    salario.current.value = "";

    setAlerta(true);
    setTimeout(() => setAlerta(false), 3000);
  }

  return (
    <>
      <header>
        {error && (
          <div className="alert alert-primary" role="alert">
            {msgError}
          </div>
        )}
        <nav className="navbar navbar-expand-sm navbar-light colornav">
          <div className="container-fluid">
            <a className="navbar-brand active" href="/">
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
          <div className="align-items-center m-4">
            <h1 className="text-sm-center fs-1"> Registro Empleados Le Gas</h1>
          </div>
          <form action="" className="" method="POST">
            <div className="row m-3">
              <label className="col-sm-4 col-form-label">Nombre empleado</label>
              <div className="col-sm-8 form-floating">
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
            </div>

            <div className="row m-3 ">
              <label className="col-sm-4 col-form-label">Cedula</label>
              <div className="col-sm-8 form-floating">
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
            </div>

            <div className="row m-3 ">
              <label className="col-sm-4 col-form-label">Cargo</label>
              <div className="col-sm-8 form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="txtcargo"
                  name="cargo"
                  required
                  value={txtcargo}
                  ref={cargo}
                  onChange={(evento) => {
                    cambiarcargo(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplaca1">
                  Indique (usuario interno o administrador)
                </label>
              </div>
            </div>

            <div className="row m-3 ">
              <label className="col-sm-4 col-form-label">Salario</label>
              <div className="col-sm-8 form-floating">
                <input
                  className="form-control"
                  type="number"
                  id="txtsalario"
                  name="salario"
                  required
                  value={txtsalario}
                  ref={salario}
                  onChange={(evento) => {
                    cambiarsalario(evento);
                  }}
                />
                <label className="text-sm-start lh-sm ms-2" for="txtplaca1">
                  Indique el salario del empleado (COP)
                </label>
              </div>
            </div>

            <div className="position-absolute top-70 start-50 translate-middle mt-4 p-4">
              <button
                className="btn butt1"
                type="submit"
                name="botonEnviar"
                onClick={Guardar}
              >
                Guardar
              </button>

              <button
                className="btn butt1"
                type="submit"
                name="botonEnviar"
                onClick={Consultar}
              >
                Consultar
              </button>

              <button
                className="btn butt1"
                type="submit"
                name="botonEnviar"
                onClick={Actualizar}
              >
                Actualizar
              </button>

              <button
                className="btn butt1"
                type="submit"
                name="botonEnviar"
                onClick={Eliminar}
              >
                Eliminar
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
