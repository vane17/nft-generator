import React from 'react';




function Header() {
  return (
    <div>
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
                <div className="nav__start--button">Inicia sesión</div>

            </div>
        </nav>
    </div>
  );
}

export {Header};