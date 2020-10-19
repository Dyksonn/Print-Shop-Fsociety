import React from 'react'

import './styles.css'

import dy from '../../images/dy.jpeg'
import karol from '../../images/karol.jpeg'
import bruno from '../../images/bruno.jpeg'
import mathe from '../../images/mathe.jpeg'
import uanderson from '../../images/uanderson.jpeg'
import welson from '../../images/welson.jpeg'
import rivaldo from '../../images/rivaldo.jpeg'

function Footer() {
    return (
        <div className='containerFooter'>
            <h1>Nossos Parceiros</h1>

            <div className="imgParceiros">
                <div className="avatar">
                    <img src={dy} alt=""/>
                    <h1>Dykson</h1>
                </div>

                <div className="avatar">
                    <img src={karol} alt=""/>
                    <h1>Karolayne</h1>
                </div>

                <div className="avatar">
                    <img src={bruno} alt=""/>
                    <h1>Bruno</h1>
                </div>

                <div className="avatar">
                    <img src={mathe} alt=""/>
                    <h1>Matheus</h1>
                </div>

                <div className="avatar">
                    <img src={uanderson} alt=""/>
                    <h1>Uanderson</h1>
                </div>

                <div className="avatar">
                    <img src={welson} alt=""/>
                    <h1>Welson</h1>
                </div>

                <div className="avatar">
                    <img src={rivaldo} alt=""/>
                    <h1>Rivaldo</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;