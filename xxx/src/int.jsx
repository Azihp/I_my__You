import './styy.css'
// import React, { useState } from "react" 
import { Box, Button } from '@mui/material'
import Header from './header/header'


import baner from "./img/Баннер.png"
import baner_mini from "./img/Баннер mini.png"
import cotig from './img/категория.png'
import cotig1 from './img/категория (1).png'
import cotig2 from './img/категория (2).png'
import cotig3 from './img/категория (3).png'
import cotig4 from './img/категория (4).png'
import cotig5 from './img/категория (5).png'
import prim from './img/Преимущества.png'
import pc from './img/карточка товара.png'
import Cart from './cart'
import Cart2 from './cart2'


let User = () => {
    return(
        <Box>
            <Header/>
            <main>
                <figure className='figure__baner'>
                <img src={baner} alt="" />
                <img src={baner_mini} alt="" />
                </figure>
                <p className='I__text__f-50'>категории товаров</p>
                <div className='menu__grid'>
                <Cart img={cotig}/>
                <Cart img={cotig1}/>
                <Cart img={cotig2}/>
                <Cart img={cotig3}/>
                <Cart img={cotig4}/>
                <Cart img={cotig5}/>
                </div>
                <div className='primushestva__img'>
                <img src={prim} alt="" /> 
                </div>
                <p className='I__text__f-40'>хиты продаж</p>
                <div className='menu__grid2'>
                <Cart2 img={pc}/>
                <Cart2 img={pc}/>
                <Cart2 img={pc}/>
                <Cart2 img={pc}/>
                <Cart2 img={pc}/>
                </div>

            </main>
        </Box>
    )
}


export default User
