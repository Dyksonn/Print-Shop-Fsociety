import React from 'react';

import './styles.css'

import backgroundHeader from '../../images/Background-Header.svg';

function Header() {
    return (
        <div id='container'>
            <div className='containerImg'>
                <div className="cabecalho">
                    <h2>Print Shop Fsociety</h2>

                    <section>
                        <a href="">Sobre Nós</a>
                        <a href="">Serviços</a>
                        <a href="">Parceiros</a>
                        <a href="">Contato</a>
                    </section>
                </div>

                <div className="servico">
                    <p className="title">Serviço</p>
                    <div>
                        <h1>Dando o seu Negocio a Novo Começo</h1>
                    </div>
                    <p>Somos apaixonados em transformar qualquer necesidade dos nossos cliente em brilhantes impressões 3D :)</p>
                </div>

                <div className="actions">
                    <button className="btnPrimary">Orçamentos</button>

                    <button className="btnSecundary">Entre em contato</button>
                </div>
            </div>
        </div>
    )
}

export default Header;