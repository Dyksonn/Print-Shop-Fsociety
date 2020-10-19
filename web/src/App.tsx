import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

import './styles/global.css'
import './styles/App.css'

import Header from './components/Header';
import Footer from './components/Footer';

import imgMedicina from './images/medicina.jpeg'

function App() {
  return (
    <div id="container">
      <Header />

      <div className="containerTitle">
          <h1>Sobre nossa empressa</h1>
          <p>Oferecemos uma ampla gama de serviços para atender até os mais ousados requirementos.</p>

          <div className="containerImgSobre">
            <img src={imgMedicina} width={497} height={300} alt=""/>

            <div className="containerSobreText">
              <p>Nossas impressoras 3d e 2d são de alta qualidade para divervas impressões de qualquer tipo de modelo que atenda os quesitos dos nossos clientes.</p>
              <p>A satisfação do nosso cliente e o nosso motivacional em busca de novas funcionalidade em impressẽos gráficas :)</p>

              <div className="checksT">
                <IoIosCheckmarkCircleOutline />
                <h2>Impressão 3D</h2>
              </div>

              <div className="checksT">
                <IoIosCheckmarkCircleOutline />
                <h2>Impressão 2D</h2>
              </div>

              <div className="checksT">
                <IoIosCheckmarkCircleOutline />
                <h2>Impressão gráfica medicina</h2>
              </div>
            </div>
          </div>
      </div>


      <Footer />
    </div>
  );
}

export default App;
