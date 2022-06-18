import { useContext } from 'react';
import foodContext from '../../context/CartContext';
import FoodList from '../Cart/Cart';
import classes from './Main.module.scss';
import MainCards from './Cards/Cards';
import MainSection from './Section/Section';
import FoodItem from '../FoodItem/FoodItem';

const Main = () => {
    const cartContext = useContext(foodContext)
    return(
        <main>
            <MainSection />
            {/* <FoodList /> */}
            <MainCards />
            <FoodItem name='aasad' price={43.43} description='dsda' id={0} icon=''/>
        </main>
    )
}

export default Main
