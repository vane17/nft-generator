import React from 'react';
import './home.css';
import {Link} from "react-router-dom";
import {Button} from "./Button/index.js";




function Home() {
  return (
    <div className="home">
        <nav className="home__nav">
            <div className="nav__logo">
                <div className="nav__logo-img"></div>
                <h3 className="nav__logo-title">The NFT Generator</h3>
            </div>
            <div className="nav__items">
                <div>Producto</div>
                <div>Precios</div>
                <div>Blog</div>
            </div>
            <div className="nav__start">
                <div className="nav__start--login">Inicia sesión</div>
                <Link to="/app" className="nav__start--button">Comenzar<span class="material-icons-outlined arrow">arrow_forward</span></Link>

            </div>
        </nav>

        <section className="home__section">
            <h1 className="section__title">
                <span>Haga colecciones</span>
                <br></br>
                <span className="section__title--nft">NFT ilimitadas</span>

            </h1>
            <p className="section__gray">¡Genera tantas colecciones NFT como desee!</p>
            <div>
                <Link to="/app" className="section__button">Genere su coleccion NFT
                <span class="material-icons-outlined arrow">arrow_forward</span></Link>
                <p className="section__paragraph">No se requiere cuenta.</p>
            </div>

            <Button/>
        </section>



    </div>


  );
}

export {Home};
