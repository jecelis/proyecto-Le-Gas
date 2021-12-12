import React, { useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Contactenos = () => {
    
    return (
        <>
            <header>
            <nav className="navbar navbar-expand-sm navbar-light colornav">
                    <div className="container-fluid">
                        <a className="navbar-brand active" href="/">Home</a>
                    </div>
            </nav>
            </header>
            <main>
                <div className="container-fluid">
                    <div className="m-2 p-2">
                        <h1 className="text-sm-center fs-1"> Contactenos</h1>
                    </div>
                    <div className="ms-3">
                        <p className="text-center m-3"> Señor(a) usuario, a continuación 
                        se presenta el equipo de desarrollo
                        </p>
                        <br />
                        <div className="row m-1 ">
                            <div className="col-sm-5 m-1">
                                <p> Ana Karina Vélez Torrenegra </p>
                            </div>
                            <div className="col-sm-5 text-start m-1">
                                <a className="text-decoration-underline" href="#"> akvelez@uninorte.edu.co </a>
                            </div>
                        </div>

                        <div className="row m-1">
                            <div className="col-sm-5 m-1">
                                <p> Juan Felipe Tovar Niño </p>
                            </div>
                            <div className="col-sm-5 text-start m-1">
                                <a className="text-decoration-underline" href="#"> fjtovar@uninorte.edu.co </a>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col-sm-5 m-1">
                                <p> Manuel Humberto Jimenéz Ramírez </p>
                            </div>
                            <div className="col-sm-5 text-start m-1">
                                <a className="text-decoration-underline" href="#"> fmhjimenez@uninorte.edu.co </a>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col-sm-5 m-1">
                                <p> David José López Casas </p>
                            </div>
                            <div className="col-sm-5 text-star m-1">
                                <a className="text-decoration-underline" href="#"> djcasas@uninorte.edu.co </a>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col-sm-5 m-1">
                                <p> John Edison López Celis </p>
                            </div>
                            <div className="col-sm-5 text-start m-1">
                                <a className="text-decoration-underline" href="#"> jecelis@uninorte.edu.co </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

