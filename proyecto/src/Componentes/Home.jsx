import React from 'react';
import inicial from '../images/inicial.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export const Home = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light colornav">
                    <div className="container-fluid">
                        <a className="navbar-brand active" href="Home">Home</a>
                        <a className="navbar-brand active" href="Ingresar">Ingresar</a>
                        <a className="navbar-brand active" href="#">Contactenos</a>
                    </div>
                </nav>
            </header>
            <main>
                <div className="container-fluid">
                    <div className="m-2 p-2">
                        <h1 className="text-sm-center fs-1"> Tanqueo Le Gas</h1>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-1">
                            <img src={inicial} className="image" alt="inicial"/>
                        </div>
                        <div className="flex-grow-1 me-1">
                            <p className="text-sm-start lh-sm fs-4">Registrate y tanquea. Tú auto merece lo mejor!</p>
                            <br />
                            <p class="text-sm-start lh-sm fs-4">LeGas siempre a tu lado, cuando más lo necesitas.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}