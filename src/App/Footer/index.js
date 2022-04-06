import React from 'react';
import UploadForm from '../../comps/UploadForm';
import './footer.css'




function Footer() {
  return (
    <div className="footer">
        <div className="footer-items">
            <section className="footer-items--logo">
                <div className="footer-logo--img"></div>
                <div>
                    <span className="footer-logo--title">The NFT Generator</span>
                    <p className="footer-logo--paragraph">Genere colecciones NFT ilimitadas</p>
                </div>
            </section>
            <section className="footer-items--information">
                <section className="items--information">
                    <h2>Producto</h2>
                    <p>Caracteristicas</p>
                    <p>Precios</p>
                    <p>Muestra gratuita</p>
                    <p>Requisitos técnicos</p>

                </section>

                <section className="items--information">
                    <h2>Compañía</h2>
                    <p>Sobre nosotros</p>
                    <p>Contáctanos</p>
                    <p>Afiliados</p>
                    <p>Medio</p>


                </section>
                <section className="items--information">
                    <h2>Recursos</h2>
                        <p>Apoyo</p>
                        <p>Blog</p>
                        <p>Video tutorial</p>
                        <p>preguntas frecuentes</p>

                </section>
            </section>

        </div>
        <div className="footer-privacy">
            <p>All rights reserved © The NFT Generator</p>
            <p>Términos y Privacidad</p>
        </div>
    <UploadForm/>
    </div>
  );
}

export {Footer};
