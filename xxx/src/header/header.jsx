import { Box, Button } from '@mui/material'
// import Header from './header/header'
import img from "../img/Фото.png"
import sea from "../img/поиск.png"
import hea from "../img/избранное.png"
import mus from "../img/корзина.png"    



let Header = () => {
    return(
        <header>
            <div className="block__true">

            </div>
            <nav>
                <img className='img__text__icon' src={img} alt="" />
                <select className='select'>
                    <option>Каталог товаров</option>
                </select>
                <a href="#">Цены</a>
                <a href="#">Калькулятор</a>
                <a href="#">Доставка</a>
                <a href="#">Отзывы</a>
            </nav>
            <nav className='menu__nav'>
                <Button className='btn__mui1' variant="contained">Contained</Button>
                <img className='img__icon__pr' src={sea} alt="" />
                <img className='img__icon__pr' src={hea} alt="" />
                <img className='img__icon__pr' src={mus} alt="" />
            </nav>
            </header>
    )
} 
export default Header
