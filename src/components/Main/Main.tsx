import { useContext } from 'react';
import foodContext from '../../context/CartContext';
import classes from './Main.module.scss';
import MainCards from './Cards/Cards';
import MainSection from './Section/Section';
import FoodItem from '../FoodItem/FoodItem';
import FoodList from '../FoodList/FoodList';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const Main = () => {
    const cartContext = useContext(foodContext)
    return(
        <main>
            <MainSection />
            <MainCards />
            <Menu />
            <Footer />
        </main>
    )
}

export default Main
